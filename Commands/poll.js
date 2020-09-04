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
            const hexaFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
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
                            a = Math.floor((Math.random()* 2) + 0);
                            b = Math.floor((Math.random()* 2) + 0);
                            c = Math.floor((Math.random()* 2) + 0);

                            aa = Math.floor((Math.random()* 2) + 0);
                            bb = Math.floor((Math.random()* 2) + 0);
                            cc = Math.floor((Math.random()* 2) + 0);

                            firstNumb = a.toString() + b.toString() + c.toString()
                            secNumb = aa.toString() + bb.toString() + cc.toString()
                            
                
                            res = (parseInt(firstNumb, 2) + parseInt(secNumb, 2)).toString(2); //solution

                            message.channel.send(`Faites l'operation suivante: ${firstNumb} + ${secNumb}`)
                            .then( () => {

                                message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 30000}).then(collected =>
                                    {
                                        if (collected.first().content == res) {
                                            message.reply("BRAVO!, Tu re-veux une addition? (oui/non)").then( () => {
                                                message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
                                                    if (collected.first().content == "oui") {
                                                        a = Math.floor((Math.random()* 2) + 0);
                                                        b = Math.floor((Math.random()* 2) + 0);
                                                        c = Math.floor((Math.random()* 2) + 0);

                                                        aa = Math.floor((Math.random()* 2) + 0);
                                                        bb = Math.floor((Math.random()* 2) + 0);
                                                        cc = Math.floor((Math.random()* 2) + 0);

                                                        firstNumb = a.toString() + b.toString() + c.toString()
                                                        secNumb = aa.toString() + bb.toString() + cc.toString()
                                                        
                                            
                                                        res = (parseInt(firstNumb, 2) + parseInt(secNumb, 2)).toString(2); //solution

                                                        message.channel.send(`Faites l'operation suivante: ${firstNumb} + ${secNumb}`)
                                                        .then ( () => {
                                                            message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
                                                                if (collected.first().content == res) {
                                                                    message.reply("Bravo, relance le programme de calcul avec i!addBase, i!subBase si besoin")
                                                                }
                                                                else {
                                                                    message.reply(`Dommage la reponse était: ${res} relance le programme de calcul avec i!addBase, i!subBase si besoin`)
                                                                }
                                                            })
                                                        })
                                                    }
                                                })
                                            })
                                        }
                                        else {
                                            message.reply(`Dommage la reponse était: ${res}`)
                                        }
                                    });
                               
                            
                            });
                        
                        })

                        medium.on('collect', r => {
                            message.channel.send("test02")
                            a = Math.floor((Math.random()* 2) + 0);
                            b = Math.floor((Math.random()* 2) + 0);
                            c = Math.floor((Math.random()* 2) + 0);
                            d = Math.floor((Math.random()* 2) + 0);

                            aa = Math.floor((Math.random()* 2) + 0);
                            bb = Math.floor((Math.random()* 2) + 0);
                            cc = Math.floor((Math.random()* 2) + 0);
                            dd = Math.floor((Math.random()* 2) + 0);

                            firstNumb = a.toString() + b.toString() + c.toString() + d.toString()
                            secNumb = aa.toString() + bb.toString() + cc.toString() + dd.toString()
                            
                
                            res = (parseInt(firstNumb, 2) + parseInt(secNumb, 2)).toString(2); //solution

                            message.channel.send(`Faites l'operation suivante: ${firstNumb} + ${secNumb}`)
                            .then( () => {

                                message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 30000}).then(collected =>
                                    {
                                        if (collected.first().content == res) {
                                            message.reply("BRAVO!, Tu re-veux une addition? (oui/non)").then( () => {
                                                message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
                                                    if (collected.first().content == "oui") {
                                                        a = Math.floor((Math.random()* 2) + 0);
                                                        b = Math.floor((Math.random()* 2) + 0);
                                                        c = Math.floor((Math.random()* 2) + 0);
                                                        d = Math.floor((Math.random()* 2) + 0);

                                                        aa = Math.floor((Math.random()* 2) + 0);
                                                        bb = Math.floor((Math.random()* 2) + 0);
                                                        cc = Math.floor((Math.random()* 2) + 0);
                                                        dd = Math.floor((Math.random()* 2) + 0);

                                                        firstNumb = a.toString() + b.toString() + c.toString() + d.toString()
                                                        secNumb = aa.toString() + bb.toString() + cc.toString() + dd.toString()
                                                        
                                            
                                                        res = (parseInt(firstNumb, 2) + parseInt(secNumb, 2)).toString(2); //solution

                                                        message.channel.send(`Faites l'operation suivante: ${firstNumb} + ${secNumb}`)
                                                        .then ( () => {
                                                            message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
                                                                if (collected.first().content == res) {
                                                                    message.reply("Bravo, relance le programme de calcul avec i!addBase, i!subBase si besoin")
                                                                }
                                                                else {
                                                                    message.reply(`Dommage la reponse était: ${res} relance le programme de calcul avec i!addBase, i!subBase si besoin`)
                                                                }
                                                            })
                                                        })
                                                    }
                                                })
                                            })
                                        }
                                        else {
                                            message.reply(`Dommage la reponse était: ${res}`)
                                        }
                                    });
                               
                            
                            });

                        })

                        hard.on('collect', r => {
                            message.channel.send("test02")
                            a = Math.floor((Math.random()* 2) + 0);
                            b = Math.floor((Math.random()* 2) + 0);
                            c = Math.floor((Math.random()* 2) + 0);
                            d = Math.floor((Math.random()* 2) + 0);
                            e = Math.floor((Math.random()* 2) + 0);

                            aa = Math.floor((Math.random()* 2) + 0);
                            bb = Math.floor((Math.random()* 2) + 0);
                            cc = Math.floor((Math.random()* 2) + 0);
                            dd = Math.floor((Math.random()* 2) + 0);
                            ee = Math.floor((Math.random()* 2) + 0);

                            firstNumb = a.toString() + b.toString() + c.toString() + d.toString() + e.toString()
                            secNumb = aa.toString() + bb.toString() + cc.toString() + dd.toString() + ee.toString()
                            
                
                            res = (parseInt(firstNumb, 2) - parseInt(secNumb, 2)).toString(2); //solution

                            message.channel.send(`Faites l'operation suivante: ${firstNumb} + ${secNumb}`)
                            .then( () => {

                                message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 30000}).then(collected =>
                                    {
                                        if (collected.first().content == res) {
                                            message.reply("BRAVO!, Tu re-veux une addition? (oui/non)").then( () => {
                                                message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
                                                    if (collected.first().content == "oui") {
                                                        a = Math.floor((Math.random()* 2) + 0);
                                                        b = Math.floor((Math.random()* 2) + 0);
                                                        c = Math.floor((Math.random()* 2) + 0);
                                                        d = Math.floor((Math.random()* 2) + 0);
                                                        e = Math.floor((Math.random()* 2) + 0);

                                                        aa = Math.floor((Math.random()* 2) + 0);
                                                        bb = Math.floor((Math.random()* 2) + 0);
                                                        cc = Math.floor((Math.random()* 2) + 0);
                                                        dd = Math.floor((Math.random()* 2) + 0);
                                                        ee = Math.floor((Math.random()* 2) + 0);

                                                        firstNumb = a.toString() + b.toString() + c.toString() + d.toString() + e.toString()
                                                        secNumb = aa.toString() + bb.toString() + cc.toString() + dd.toString() + ee.toString()
                                                        
                                            
                                                        res = (parseInt(firstNumb, 2) + parseInt(secNumb, 2)).toString(2); //solution

                                                        message.channel.send(`Faites l'operation suivante: ${firstNumb} + ${secNumb}`)
                                                        .then ( () => {
                                                            message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
                                                                if (collected.first().content == res) {
                                                                    message.reply("Bravo, relance le programme de calcul avec i!addBase, i!subBase si besoin")
                                                                }
                                                                else {
                                                                    message.reply(`Dommage la reponse était: ${res} relance le programme de calcul avec i!addBase, i!subBase si besoin`)
                                                                }
                                                            })
                                                        })
                                                    }
                                                })
                                            })
                                        }
                                        else {
                                            message.reply(`Dommage la reponse était: ${res}`)
                                        }
                                    });
                               
                            
                            });

                        })

                    })

                )


            }) //FIN DE LA COLLECT BINARY


            //COLLECT HEXA
            hexa.on('collect', r => {
                const embedChoice = new Discord.RichEmbed()
                    .setTitle("PROGRAMME HEXADECIMAL")
                    .setColor("GREEN")
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

                            var hexadecimal = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f")
                            a = hexadecimal[Math.floor(Math.random()*hexadecimal.length)];
                            b = hexadecimal[Math.floor(Math.random()*hexadecimal.length)];
                            c = hexadecimal[Math.floor(Math.random()*hexadecimal.length)];

                            aa = hexadecimal[Math.floor(Math.random()*hexadecimal.length)]
                            bb = hexadecimal[Math.floor(Math.random()*hexadecimal.length)]
                            cc = hexadecimal[Math.floor(Math.random()*hexadecimal.length)]

                            firstNumb = "0x" + a.toString() + b.toString() + c.toString()
                            secNumb = "0x" + aa.toString() + bb.toString() + cc.toString()
                            
                
                            res = (parseInt(firstNumb, 16) + parseInt(secNumb, 16)).toString(16); //solution

                            message.channel.send(`Faites l'operation suivante: ${firstNumb} + ${secNumb}`)
                            .then( () => {

                                message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 30000}).then(collected =>
                                    {
                                        if (collected.first().content == res) {
                                            message.reply("BRAVO!, Tu re-veux une addition? (oui/non)").then( () => {
                                                message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
                                                    if (collected.first().content == "oui") {
                                                        var hexadecimal = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f")
                                                        a = hexadecimal[Math.floor(Math.random()*hexadecimal.length)];
                                                        b = hexadecimal[Math.floor(Math.random()*hexadecimal.length)];
                                                        c = hexadecimal[Math.floor(Math.random()*hexadecimal.length)];
                            
                                                        aa = hexadecimal[Math.floor(Math.random()*hexadecimal.length)]
                                                        bb = hexadecimal[Math.floor(Math.random()*hexadecimal.length)]
                                                        cc = hexadecimal[Math.floor(Math.random()*hexadecimal.length)]
                            
                                                        firstNumb = "0x" + a.toString() + b.toString() + c.toString()
                                                        secNumb = "0x" + aa.toString() + bb.toString() + cc.toString()
                                                        
                                            
                                                        res = (parseInt(firstNumb, 16) + parseInt(secNumb, 16)).toString(16); //solution

                                                        message.channel.send(`Faites l'operation suivante: ${firstNumb} + ${secNumb}`)
                                                        .then ( () => {
                                                            message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
                                                                if (collected.first().content == res) {
                                                                    message.reply("Bravo, relance le programme de calcul avec i!addBase, i!subBase si besoin")
                                                                }
                                                                else {
                                                                    message.reply(`Dommage la reponse était: ${res} relance le programme de calcul avec i!addBase, i!subBase si besoin`)
                                                                }
                                                            })
                                                        })
                                                    }
                                                })
                                            })
                                        }
                                        else {
                                            message.reply(`Dommage la reponse était: ${res}`)
                                        }
                                    });
                               
                            
                            });
                        
                        })
                    })
                )
            })
        })
    )
};


module.exports.help = {
  name: 'addBase'
};