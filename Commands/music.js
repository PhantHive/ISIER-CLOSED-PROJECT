const ytdl = require('ytdl-core');
const GOOGLE_API_KEY = 'AIzaSyDse8N2YEPG8v53iSf1klZ95S16tLpGY3Y';
const Youtube = require('simple-youtube-api');
const youtube = new Youtube(GOOGLE_API_KEY);


module.exports.run = async(client, message, args) => {


  const args = msg.content.split(' ');
      const searchStr = args.slice(1).join(' ');
      const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
      console.log(searchStr);
      const serverQ = queue.get(msg.guild.id);

      if (msg.content.startsWith(prefix + 'play')) {
          const voiceChannel = msg.member.voiceChannel;
          if (!voiceChannel) return msg.channel.send(' You are not in a voice channel');
          const permissions = voiceChannel.permissionsFor(msg.client.user);
          if (!permissions.has('CONNECT')) {
              return msg.channel.send('Check permissions of your voice channel :P');
          }
          if (!permissions.has('SPEAK')) {
              return msg.channel.send('I can\'t talk, i don\'t have enough permission:/');
          }

          try {
              var video = await youtube.getVideo(url);
          } catch (error) {
              try {
                var videos = await youtube.searchVideos(searchStr, 1);
                var video = await youtube.getVideoByID(videos[0].id);
              } catch (error) {
                  console.error(error);
                  return msg.channel.send('can\'t find this song')
              }
          }
          console.log(video);
          const song = {
              id: video.id,
              title: video.title,
              url: `https://www.youtube.com/watch?v=${video.id}`
          };

          if (!serverQ) {
              const newQueue = {
                  textChannel: msg.channel,
                  voiceChannel: voiceChannel,
                  connection: null,
                  songs: [],
                  volume: 2,
                  playing: true
              };
              queue.set(msg.guild.id, newQueue);

              newQueue.songs.push(song);
              try {
                  var connection = await voiceChannel.join();
                  newQueue.connection = connection;
                  play(msg.guild, newQueue.songs[0])
              } catch (error) {
                  console.error('i could not join channel: ${error}');
                  queue.delete(msg.guild.id);
                  return msg.channel.send(`I could not join the channel: ${error}`);
              }
          } else {
              serverQ.songs.push(song);
              return msg.channel.send(`*${song.title}* is on the QUEUE baby!`);
          }
          return undefined;

      } else if (msg.content.startsWith(`${prefix}next`)) {
          if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel');
          if (serverQ) return msg.channel.send('no more song after this one');
          serverQ.connection.dispatcher.end();
          return undefined;

      } else if (msg.content.startsWith(prefix + "stop")) {
          if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel');
          if (!serverQ) return msg.channel.send('no song to stop');
          serverQ.songs = [];
          serverQ.connection.dispatcher.end();
          return undefined;

      } else if (msg.content.startsWith(prefix + 'volume')){
          if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel');
          if(!serverQ) return msg.channel.send('I can\'t hear anything, do you? you must have **super** ears');
          if(!args[1]) return msg.channel.send(`Current volume: **${serverQ.volume}**`);
          serverQ.volume = args[1];
          serverQ.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
          return msg.channel.send(`New volume: **${args[1]}** `);

      }  else if (msg.content.startsWith(`${prefix}songname`)) {
          if (!msg.member.voiceChannel) return msg.channel.send('I can\'t hear anything, do you?');
          return msg.channel.send(`Playing: ***${serverQ.songs[0].title}***`);

      } else if(msg.content.startsWith(prefix + 'infoqueue')){
          if (!serverQ) return msg.channel.send('I can\'t hear anything, do you? I guess there is nothing in the queue');
          return msg.channel.send(`
  __***Actual Queue***__
  ${serverQ.songs.map(song => `${song.title}`).join('\n')}
  **Playing: ${serverQ.songs[0].title}
          `)
      } else if (msg.content.startsWith(prefix + 'pause')) {
          if (serverQ && serverQ.playing) {
              serverQ.playing = false;
              serverQ.connection.dispatcher.pause();
              return msg.channel.send('Successfully paused.');
          }
          return msg.channel.send('Nothing i can pause');

      } else if (msg.content.startsWith(prefix + 'resume')) {
          if (serverQ && !serverQ.playing){
              serverQ.playing = true;
              serverQ.connection.dispatcher.resume();
              return msg.channel.send('Successfully resumed.');
          }
          return msg.channel.send('Nothing i can resume');
      }

      return undefined;

  });

      function play(guild, song) {
          const serverQ = queue.get(guild.id);
          if (!song){
              serverQ.voiceChannel.leave();
              queue.delete(guild.id);
              return;
          }

          const dispatcher = serverQ.connection.playStream(ytdl(song.url))
              .on('end', reason => {
                  if(reason === 'Stream is not generating quickly enough.') console.log('Song ended');
                  else console.log(reason);
                  //rejoue la playlist
                  serverQ.songs.shift();
                  play(guild, serverQ.songs[0]);
              })
              .on('error', error => console.error(error));
          dispatcher.setVolumeLogarithmic(5 / 5);

          serverQ.textChannel.send(`Here the current song you are listening to babe: ***${song.title}***`)
      }


}



module.exports.help = {

  name: 'musique'

};
