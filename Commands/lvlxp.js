const Discord = require('discord.js');
const fichier = require('./Events/level.js')

module.exports.run = async (client, message, args) => {

  const lvl_embed = new Discord.RichEmbed()
            .setColor('#DB13C2')
            .addField(message.member.displayName + ",\n Level actuel: ", curLvl, true)
            .addField(" avec: ", curxp + " experience \n===ApoCsXpSystem===", false)
            .setThumbnail(message.author.avatarURL);
        message.channel.send(lvl_embed)

};

module.exports.help = {
    name: 'rank'
};
