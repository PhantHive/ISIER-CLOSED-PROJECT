const Discord = require('discord.js')


module.exports =  {
    name:"pyaide",
    aliases: ["pyhelp", "py"],
    category:"studenthelp",
    description:"give help for python",
    timeout: 120000,
    usage:"pyaide",
    run: async(client,message) => {

        const embed = new Discord.MessageEmbed()
            .setColor('#DB13C2')
            .setTitle('AIDE PYTHON (beta)')
            .addField("fonctions", "i!fonction", true)
            .addField("if - else", "i!ifelse", true)
            .addField("boucle while", "i!while", true)
            .addField("boucle for", "i!for", true)
            .addField("[listes]", "i!listes", true)
            .addField("[dictionnaires]", "i!dic", true)
            .addField("<tkinter>", "i!tkaide", true)
            .setFooter("Aide python, commandes.")
            .setThumbnail('https://imgur.com/oamlctq.png')
            .setTimestamp();
        await message.channel.send(embed);
    }
}

