const Discord = require("discord.js");


module.exports.run = async(client, msg, args) => {


      if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel');
      if (!serverQ) return msg.channel.send('no song to stop');
      serverQ.songs = [];
      serverQ.connection.dispatcher.end();
      return undefined;



}

module.exports.help = {

  name: "stop"

};
