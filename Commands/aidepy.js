const Discord = require('discord.js')


module.exports.run = async(client, message, args) => {
    

    const embed = new Discord.RichEmbed()
        .setColor('#DB13C2')
        .addField("fonctions", "i!fonction", true)
        .addField("if - else", "i!ifelse", true)
        .addBlankField()
        .addField("boucle while", "i!while", true)
        .addField("boucle for", "i!for", true)
        .addBlankField()
        .addField("[listes]", "i!listes", true)
        .addField("[dictionnaires]", "i!dic", true)
        .addField("<tkinter>", "i!tk", true)

        .setFooter("Aide python, commandes.")
        .setThumbnail('https://imgur.com/oamlctq.png')
        .setTimestamp();
    message.channel.send(embed);

}

module.exports.help = {
    name: "pyaide"
};