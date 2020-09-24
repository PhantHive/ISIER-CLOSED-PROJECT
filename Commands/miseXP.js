const Discord = require("discord.js");
client.mongoose = require('../utils/mongose.js');
const XLD = require('../models/RankSystem.js');
const { join } = require("path");

module.exports = async (message, args) => {

    const challenger = message.author.id;
    const adversaire = message.mentions.members.first() || message.guild.members.get(args[0]);
    const xpMiser = message.guild.members.get(args[1]);

        //mongoDB
    XLD.find({

        ID: challenger + "-" + message.guild.id,
        ID: adversaire.id + "-" + message.guild.id

    }, 
    async (err, data) =>  {
        if (err) console.log(err);
        if(!data) {
            message.channel.send("Cette utilisateur n'as pas de rang tu ne peux miser avec lui.")
        }
        else { 

            if (data.XP < xpMiser) {
                message.channel.send("tu ne peux pas mise une somme dont ne dispose pas ton adversaire ou toi meme!");
            }
            else {
                message.channel.send(`${challenger} **challenge** ${adversaire} et mise ${xpMiser}, veux tu *suivre*?`).then(
                    msg.react('👍').then(r => {
                        msg.react('👎');
                        //FILTRES
                        const ouiFilter = (reaction, user) => reaction.emoji.name === '👍' && user.id === adversaire.id;
                        const nonFilter = (reaction, user) => reaction.emoji.name === '👎' && user.id === adversaire.id;
                        //CREATION DES COLLECTEUR
                        const oui = msg.createReactionCollector(ouiFilter,{time: 15000});
                        const non = msg.createReactionCollector(nonFilter,{time: 15000});

                        oui.on('collect', r => {
                            const randomChooseFirst = Math.floor(Math.random() * 3 + 1);
                            console.log(randomChooseFirst);
                            if (randomChooseFirst == 1) {
                                message.channel.send(`Decision: ${challenger} vous choisissez, Pile ou Face? (repondre dans le chat)`, {time: 15000})
                                .then( () => {

                                    message.channel.awaitMessages(msg => msg.author.id == challenger, {max: 1, time: 15000})
                                    .then( collected => {

                                        const randomPileFace = Math.floor(Math.random() * 3 + 1);
                                        if(collected.first().content == randomPileFace) {
                                            message.channel.send(join(__dirname, "..", "image", "pieceTournant.jpg").then(m => m.delete(11000)))
                                            .then(() => message.channel.send("suspense").then(m => m.delete(5000)))
                                            .then(() => message.channel.send(join(__dirname, "..", "image", "pieceFace.jpg")).then(m => m.delete(11000)))
                                          
                                            message.channel.send(`Bravo ${challenger} vous avez gagné ${xpMiser}! deso ${adversaire} *better luck next time :P*`);
                                            
                                            const docChallenger = XLD.find({
                                                ID: challenger + "-" + message.guild.id
                                            });

                                            docChallenger.XP += xpMiser;

                                            const docAdversaire = XLD.find({
                                                ID: adversaire.id + "-" + message.guild.id
                                            });

                                            docAdversaire.XP -= xpMiser;
                                            
                                           

                                        } else {

                                            message.channel.send(join(__dirname, "..", "image", "pieceTournant.jpg").then(m => m.delete(11000)))
                                            .then(() => message.channel.send("suspense").then(m => m.delete(5000)))
                                            .then(() => message.channel.send(join(__dirname, "..", "image", "piecePile.jpg")).then(m => m.delete(11000)))

                                            message.channel.send(`Bravo ${adversaire} vous avez gagné ${xpMiser}! deso ${challenger} *better luck next time :P*`);
                                            
                                            const docChallenger = XLD.find({
                                                ID: challenger + "-" + message.guild.id
                                            });

                                            docChallenger.XP -= xpMiser;

                                            const docAdversaire = XLD.find({
                                                ID: adversaire.id + "-" + message.guild.id
                                            });

                                            docAdversaire.XP += xpMiser;
                                        }

                                   
                                    });

                                });
                            }
                        });

                        non.on('collect', r => {
                            message.channel.send("mise Annuler")
                        });

                    })
                )
                        
            }
        
        }

    })


}

module.exports.help = {
    name: "miseXp"
};