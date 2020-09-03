const Discord = require('discord.js')


module.exports.run = async(client, message, args) => {
    
    let pyInfo = "i!fonction                i!lib\n" +
                "i!ifelse                i!while\n" +
                "i!for                i!listes\n" +
                "i!dic                i!tk"

    const embed = Discord.RichEmbed()
        .setColor('#DB13C2')
        .setDescription(pyInfo)
        .setFooter("Aide python, commandes.")
        .setImage('https://imgur.com/oamlctq.png')
        .setThumbnail('')
        .setTimestamp();
    message.channel.send(embed);

}

module.exports.help = {
    name: "pyaide"
};