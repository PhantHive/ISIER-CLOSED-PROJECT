const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    args = msg.content.split(' ');
    const searchStr = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    console.log(searchStr);
    const serverQ = queue.get(msg.guild.id);


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

};



module.exports.help = {

  name: "p"

};
