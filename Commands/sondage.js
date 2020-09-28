const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(args.length < 1) {

        message.channel.send("Tu souhaites faire un sondage a choix multiple, quel est la question du songdage?")
        .then(m => m.delete(20000))
        .then( () => {
            message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 20000})
            .then(m => m.delete(2000))
            .then(collected => {
                questionSondage = collected.first().content;
                message.channel.send("Premiere choix: ")
                .then(m => m.delete(15000))
                .then(() => {
                    message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000})
                    .then(m => m.delete(2000))
                    .then(collected => {
                        choixA = collected.first().content;
                        message.channel.send("Deuxieme choix: ")
                        .then(m => m.delete(15000))
                        .then(() => {
                            message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000})
                            .then(m => m.delete(2000))
                            .then(collected => {
                                choixB = collected.first().content;
                                message.channel.send("+ de choix? ")
                                .then(msg => msg.react('➕')
                                    .then(r => {
                                        msg.react('✖️');
                                        
                                        const plusChoixFilter = (reaction, user) => reaction.emoji.name == '➕' && user.id == message.author.id;
                                        const noChoixFilter = (reaction, user) => reaction.emoji.name == '✖️' && user.id == message.author.id;

                                        const plus = msg.createReactionCollector(plusChoixFilter, {time: 10000});
                                        const no = msg.createReactionCollector(noChoixFilter, {time: 10000});

                                        plus.on('collect', r => {
                                            message.channel.send("Troisieme choix: ")
                                                .then(m => m.delete(15000))
                                                .then(() => {
                                                    message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000})
                                                    .then(m => m.delete(2000))
                                                    .then(collected => {
                                                        choixC = collected.first().content;
                                                        message.channel.send("+ de choix? ")
                                                        .then(msg => msg.react('➕')
                                                            .then(r => { 
                                                                msg.react('✖️');
                                        
                                                                const plusChoixFilter = (reaction, user) => reaction.emoji.name == '➕' && user.id == message.author.id;
                                                                const noChoixFilter = (reaction, user) => reaction.emoji.name == '✖️' && user.id == message.author.id;

                                                                const plus = msg.createReactionCollector(plusChoixFilter, {time: 10000});
                                                                const no = msg.createReactionCollector(noChoixFilter, {time: 10000});
                                                                
                                                                plus.on('collect', r => {
                                                                    message.channel.send("Troisieme choix: ")
                                                                    .then(m => m.delete(15000))
                                                                    .then(() => {
                                                                        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000})
                                                                        .then(m => m.delete(2000))
                                                                        .then(collected => {
                                                                            choixD = collected.first().content;
                                                                            message.channel.send("4 choix c'est assez non? aha")
                                                                            let sondageEmbed = new Discord.RichEmbed()
                                                                                .setTitle("SONDAGE- CHOIX MULTIPLES")
                                                                                .setDescription(questionSondage)
                                                                                .addField('choix A' + choixA)
                                                                                .addField('choix B' + choixB)
                                                                                .addField('choix C' + choixC)
                    
                                                                            let sondageMessage = await message.channel.send(sondageEmbed);
                                                                            await sondageMessage.react('🇦');
                                                                            await sondageMessage.react('🇧');
                                                                            await sondageMessage.react('🇨');
                                                                            await sondageMessage.react('🇩');

                                                                        })
                                                                    })

                                                                })

                                                                no.on('collect', r => {
                                                                    let sondageEmbed = new Discord.RichEmbed()
                                                                        .setTitle("SONDAGE- CHOIX MULTIPLES")
                                                                        .setDescription(questionSondage)
                                                                        .addField('choix A' + choixA)
                                                                        .addField('choix B' + choixB)
                                                                        .addField('choix C' + choixC)
                        
                                                                    let sondageMessage = await message.channel.send(sondageEmbed);
                                                                    await sondageMessage.react('🇦');
                                                                    await sondageMessage.react('🇧');
                                                                    await sondageMessage.react('🇨');
                                                                });

                                                            })

                                                        )
                                                    })
                                                })
                                        });

                                        no.on('collect', r => {
                                            let sondageEmbed = new Discord.RichEmbed()
                                                .setTitle("SONDAGE- CHOIX MULTIPLES")
                                                .setDescription(questionSondage)
                                                .addField('choix A' + choixA)
                                                .addField('choix B' + choixB)

                                            let sondageMessage = await message.channel.send(sondageEmbed);
                                            await sondageMessage.react('🇦');
                                            await sondageMessage.react('🇧');
                                        });

                                    })
                                )
                            })
                        })

                    })
                })

            })
        })

    }

    let sondageEmbed = new Discord.RichEmbed()
        .setTitle("SONDAGE")
        .setDescription(args.join(" "));

    let sondageMessage = await message.channel.send(sondageEmbed);
    await sondageMessage.react('👍');
    await sondageMessage.react('👎');

    const filter = (reaction) => reaction.emoji.name === '👍' || reaction.emoji.name === '👎'
    const results = await sondageMessage.awaitReactions(filter, {
        time: 864000
    });

    let resultsEmbed = new Discord.RichEmbed()
        .setTitle("Resultat du sondage:")
        .setDescription(`Resultats: ${args.join(" ")}`)
        .addField("👍: ", ` ${results.get('👍').count-1}`)
        .addField("👍: ", ` ${results.get('👎').count - 1}`)
    client.channels.get('613749495716642818').send(resultsEmbed);
};


module.exports.help = {
    name: "sondage"
};