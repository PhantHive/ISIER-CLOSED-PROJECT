const Discord = require('discord.js');

module.exports.run = async ( client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setTitle("REVISIONS BINAIRE ET HEXA")
        .setColor("ORANGE")
        .setFooter("Reagissez avec une des 2 emojis pour acceder au programme de revision");
    message.channel.send(embed).then(msg =>

        msg.react('🅱').then(r => {
            msg.react('❎');
            //FILTRES
            const binaryFilter = (reaction, user) => reaction.emoji.name === '🅱' && user.id === message.author.id;
            const hexaFilter = (reaction, user) => reaction.emoji.name === '' && user.id === message.author.id;
            //CREATION DES COLLECTEUR
            const binary = msg.createReactionCollector(binaryFilter,{time: 15000});
            const hexa = msg.createReactionCollector(hexaFilter,{time: 15000});

            //COLLECT BINARY
            binary.on('collect', r => {
                const embedChoice = new Discord.RichEmbed()
                    .setTitle("PROGRAMME BINAIRE")
                    .setColor("ORANGE")
                    .addField("Choisissez votre niveau de difficulte:")
                    .setFooter("Reagissez avec l'une des emojis ci-dessous");
                message.channel.send(embedChoice).then(msg =>
                    msg.react('🙂').then(r => {
                        msg.react('😖');
                        msg.react('😤');
                        //FILTRES
                    })

                )


            }) //FIN DE LA COLLECT BINARY


            //COLLECT HEXA

        })
    )
};


module.exports.help = {
  name: 'addBase'
};