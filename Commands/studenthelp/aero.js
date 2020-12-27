const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setTitle("Conception d'un Avion")
        .setColor("DARK_VIVID_PINK")
        .setDescription("Hello ipsalien! tu travailles sur\n " +
            "Avion de transport civil ✈️ ou un Avion d'affaires 🛬 ?")
    message.channel.send(embed).then(msg =>
        msg.react('✈️').then(r => {
            msg.react('🛬');

            const civilFilter = (reaction, user) => reaction.emoji.name === '✈️' && user.id === message.author.id;
            const affaireFilter = (reaction, user) => reaction.emoji.name === '🛬' && user.id === message.author.id;


        })
    )
}


module.exports.help = {
    name: "aero"
}


