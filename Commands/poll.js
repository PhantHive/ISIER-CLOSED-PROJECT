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
                        msg.react('😖')
                        msg.react('😤');
                        //FILTRES
                        const easyFilter = (reaction, user) => reaction.emoji.name == '🙂' && user.id === message.author.id
                        const mediumFilter = (reaction, user) => reaction.emoji.name == '😖' && user.id === message.author.id
                        const hardFilter = (reaction, user) => reaction.emoji.name == '😤' && user.id === message.author.id

                        const easy = msg.createReactionCollector(easyFilter, {time: 15000});
                        const medium = msg.createReactionCollector(mediumFilter, {time: 15000});
                        const hard = msg.createReactionCollector(hardFilter, {time: 15000});

                        easy.on('collect', r => {
                            message.channel.send("test01")
                        })

                        medium.on('collect', r => {
                            message.channel.send("test02")


                        })
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