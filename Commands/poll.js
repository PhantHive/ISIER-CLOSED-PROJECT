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
                            a = Math.floor((Math.random()* 1) + 0);
                            b = Math.floor((Math.random()* 1) + 0);
                            c = Math.floor((Math.random()* 1) + 0);

                            aa = Math.floor((Math.random()* 1) + 0);
                            bb = Math.floor((Math.random()* 1) + 0);
                            cc = Math.floor((Math.random()* 1) + 0);

                            firstNumb = a.toString() + b.toString() + c.toString()
                            secNumb = aa.toString() + bb.toString() + cc.toString()
                            
                
                            res = (parseInt(firstNumb, 2) + parseInt(secNumb, 2)).toString(2); //solution

                            message.channel.send(`Faites l'operation suivante: ${firstNumb} + ${secNumb}`)
                        
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