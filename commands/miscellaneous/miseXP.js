const Discord = require("discord.js");
const client = new Discord.Client();
client.mongoose = require('../../utils/mongose.js');
const XLD = require('../../models/RankSystem.js');
const { join } = require("path");

module.exports =  {
    name:"miseXp",
    aliases: ["miser", "misexp", "miseXP"],
    category:"miscellaneous",
    description:"challenge someone for earn xp",
    timeout: 600000,
    usage:"miseXp",
    run: async(client, message, args) => {
        const challenger = message.author.id;
        const adversaire = message.mentions.members.first() || message.guild.members.get(args[0]);
        const xpMiser = parseInt(args[1]);

        if (adversaire.id === challenger) {
            message.reply("Tu peux pas te challenge toi meme aha.");
            return;
        }


        if (!xpMiser) {
            message.reply("tu dois mise quelque chose!");
            return;
        }
        ;

        if (!adversaire === undefined) {
            message.reply("Je pense que tu voulais faire ca: i!miseXp TagDeTonAdversaire QuantiteXP");
            return;
        }
        //mongoDB

        var adversaireInf = XLD.findOne({
            ID: adversaire.id + "-" + message.guild.id
        });
        adversaireInf.exec((err, doc) => {
            if (err) console.log(err);
            if (!doc) {
                if (adversaire.id === 620678345364865051 && xpMiser > 0) {
                    message.reply("Mdrrrrrrrr, tu me fumes mec, tu veux vraiment mise avec moi, ok, wait for it...")
                        .then(() => message.channel.send(`Bravo <@${challenger}> tu viens de perdre le triple de l'xp que tu as mise :)`));
                    const docChallenger = XLD.findOne({
                        ID: challenger + "-" + message.guild.id
                    });
                    docChallenger.exec((err, doc) => {
                        if (err) console.log(err);
                        doc.XP -= (3 * xpMiser);
                        doc.save()

                    })
                } else if ((adversaire.id === 620678345364865051) && (xpMiser < 0)) {
                    message.reply("Big brain, isn't it? wait for it...")
                        .then(() => message.channel.send(`Bravo <@${challenger}> tu viens de perdre le triple de l'oppose de l'xp que tu as mise :)`));
                    const docChallenger = XLD.findOne({
                        ID: challenger + "-" + message.guild.id
                    });
                    docChallenger.exec((err, doc) => {
                        if (err) console.log(err);
                        doc.XP += (3 * xpMiser);
                        doc.save()

                    })
                } else {
                    message.channel.send("Cette utilisateur n'as pas de rang tu ne peux miser avec lui.");
                }
            } else if (doc.XP < xpMiser) {
                message.channel.send("tu ne peux pas mise une somme dont ne dispose pas ton adversaire!");
            } else {

                var challengerInf = XLD.findOne({
                    ID: challenger + "-" + message.guild.id
                });
                challengerInf.exec((err, doc) => {
                    if (err) console.log(err);
                    if (!doc) {
                        message.channel.send("Tu n'as pas de rang!")
                        return;
                    } else if (doc.XP < xpMiser) {
                        message.channel.send("tu ne peux pas miser des XP que tu ne possedes pas!");
                    } else {

                        message.channel.send(`<@${challenger}> **challenge** ${adversaire} et mise **${xpMiser} XP!**, veux tu *suivre*?`).then(msg =>
                            msg.react('👍').then(r => {
                                msg.react('👎');
                                //FILTRES
                                const ouiFilter = (reaction, user) => reaction.emoji.name === '👍' && user.id === adversaire.id;
                                const nonFilter = (reaction, user) => reaction.emoji.name === '👎' && user.id === adversaire.id;
                                //CREATION DES COLLECTEUR
                                const oui = msg.createReactionCollector(ouiFilter, {time: 50000});
                                const non = msg.createReactionCollector(nonFilter, {time: 50000});

                                oui.on('collect', r => {
                                    const randomChooseFirst = Math.floor(Math.random() * 2) + 1;
                                    console.log(randomChooseFirst);
                                    if (randomChooseFirst === 1) {
                                        message.channel.send(`Decision: <@${challenger}> vous choisissez, Pile ou Face? (repondre dans le chat)`, {time: 15000})
                                            .then(() => {

                                                message.channel.awaitMessages(msg => msg.author.id == challenger, {
                                                    max: 1,
                                                    time: 50000
                                                })
                                                    .then(collected => {

                                                        const array = ["Pile", "Face"];
                                                        const randomPileFace = array[Math.floor(Math.random() * array.length)];
                                                        if ((collected.first().content === randomPileFace) && (randomPileFace === "Face")) {
                                                            message.channel.send({files: [join(__dirname, '../../ressources/image/pieceTournant.jpg/')]}).then(m => m.delete(2000))
                                                                .then(() => message.channel.send("suspense...").then(m => m.delete(2000)))
                                                                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/image/pieceFace.jpg')]}).then(m => m.delete(2000)))
                                                                .then(() => message.channel.send(`Bravo <@${challenger}> vous avez gagné ${xpMiser}! deso ${adversaire} *better luck next time :P*`));

                                                            const docChallenger = XLD.findOne({
                                                                ID: challenger + "-" + message.guild.id
                                                            });
                                                            docChallenger.exec((err, doc) => {
                                                                if (err) console.log(err);
                                                                doc.XP += xpMiser;
                                                                doc.save()

                                                            })


                                                            const docAdversaire = XLD.findOne({
                                                                ID: adversaire.id + "-" + message.guild.id
                                                            });
                                                            docAdversaire.exec((err, doc) => {
                                                                if (err) console.log(err);
                                                                doc.XP -= xpMiser;
                                                                doc.save()

                                                            })


                                                        } else if ((collected.first().content === randomPileFace) && (randomPileFace === "Pile")) {
                                                            message.channel.send({files: [join(__dirname, '../../ressources/image/pieceTournant.jpg/')]}).then(m => m.delete(2000))
                                                                .then(() => message.channel.send("suspense...").then(m => m.delete(2000)))
                                                                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/image/piecePile.jpg')]}).then(m => m.delete(2000)))
                                                                .then(() => message.channel.send(`Bravo <@${challenger}> vous avez gagné ${xpMiser}! deso ${adversaire} *better luck next time :P*`));

                                                            const docChallenger = XLD.findOne({
                                                                ID: challenger + "-" + message.guild.id
                                                            });
                                                            docChallenger.exec((err, doc) => {
                                                                if (err) console.log(err);
                                                                doc.XP += xpMiser;
                                                                doc.save()

                                                            })


                                                            const docAdversaire = XLD.findOne({
                                                                ID: adversaire.id + "-" + message.guild.id
                                                            });
                                                            docAdversaire.exec((err, doc) => {
                                                                if (err) console.log(err);
                                                                doc.XP -= xpMiser;
                                                                doc.save()

                                                            })


                                                        } else if ((collected.first().content === "Pile") && (randomPileFace === "Face")) {
                                                            message.channel.send({files: [join(__dirname, '../../ressources/image/pieceTournant.jpg/')]}).then(m => m.delete(2000))
                                                                .then(() => message.channel.send("suspense...").then(m => m.delete(2000)))
                                                                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/image/pieceFace.jpg')]}).then(m => m.delete(2000)))
                                                                .then(() => message.channel.send(`Bravo ${adversaire} vous avez gagné ${xpMiser}! deso <@${challenger}> *better luck next time :P*`));

                                                            const docChallenger = XLD.findOne({
                                                                ID: challenger + "-" + message.guild.id
                                                            });
                                                            docChallenger.exec((err, doc) => {
                                                                if (err) console.log(err);
                                                                doc.XP -= xpMiser;
                                                                doc.save()

                                                            })


                                                            const docAdversaire = XLD.findOne({
                                                                ID: adversaire.id + "-" + message.guild.id
                                                            });
                                                            docAdversaire.exec((err, doc) => {
                                                                if (err) console.log(err);
                                                                doc.XP += xpMiser;
                                                                doc.save()

                                                            })


                                                        } else if ((collected.first().content === "Face") && (randomPileFace === "Pile")) {

                                                            message.channel.send({files: [join(__dirname, '../../ressources/image/pieceTournant.jpg')]}).then(m => m.delete(2000))
                                                                .then(() => message.channel.send("suspense...").then(m => m.delete(2000)))
                                                                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/image/piecePile.jpg')]}).then(m => m.delete(2000)))
                                                                .then(() => message.channel.send(`Bravo ${adversaire} vous avez gagné ${xpMiser}! deso <@${challenger}> *better luck next time :P*`));

                                                            const docChallenger = XLD.findOne({
                                                                ID: challenger + "-" + message.guild.id
                                                            });
                                                            docChallenger.exec((err, doc) => {
                                                                if (err) console.log(err);
                                                                doc.XP -= xpMiser;
                                                                doc.save()

                                                            })


                                                            const docAdversaire = XLD.findOne({
                                                                ID: adversaire.id + "-" + message.guild.id
                                                            });

                                                            docAdversaire.exec((err, doc) => {
                                                                if (err) console.log(err);
                                                                doc.XP += xpMiser;
                                                                doc.save()

                                                            })

                                                        } else {
                                                            message.channel.send("Mise annuler! vous n'avez pas choisis Pile ou Face!")
                                                        }


                                                    });

                                            });
                                    } else {

                                        message.channel.send(`Decision: ${adversaire} vous choisissez, Pile ou Face? (repondre dans le chat)`, {time: 15000})
                                            .then(() => {

                                                message.channel.awaitMessages(msg => msg.author.id === adversaire.id, {
                                                    max: 1,
                                                    time: 50000
                                                })
                                                    .then(collected => {

                                                        const array = ["Pile", "Face"];
                                                        const randomPileFace = array[Math.floor(Math.random() * array.length)];
                                                        if ((collected.first().content === randomPileFace) && (randomPileFace === "Face")) {
                                                            message.channel.send({files: [join(__dirname, '../../ressources/image/pieceTournant.jpg/')]}).then(m => m.delete(2000))
                                                                .then(() => message.channel.send("suspense...").then(m => m.delete(2000)))
                                                                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/image/pieceFace.jpg')]}).then(m => m.delete(2000)))
                                                                .then(() => message.channel.send(`Bravo ${adversaire} vous avez gagné ${xpMiser}! deso <@${challenger}> *better luck next time :P*`));

                                                            const docChallenger = XLD.findOne({
                                                                ID: challenger + "-" + message.guild.id
                                                            });
                                                            docChallenger.exec((err, doc) => {
                                                                if (err) console.log(err);

                                                                doc.XP -= xpMiser;
                                                                doc.save()

                                                            })


                                                            const docAdversaire = XLD.findOne({
                                                                ID: adversaire.id + "-" + message.guild.id
                                                            });
                                                            docAdversaire.exec((err, doc) => {
                                                                if (err) console.log(err);

                                                                doc.XP += xpMiser;
                                                                doc.save()

                                                            })


                                                        } else if ((collected.first().content === randomPileFace) && (randomPileFace === "Pile")) {
                                                            message.channel.send({files: [join(__dirname, '../../ressources/image/pieceTournant.jpg/')]}).then(m => m.delete(2000))
                                                                .then(() => message.channel.send("suspense...").then(m => m.delete(2000)))
                                                                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/image/piecePile.jpg')]}).then(m => m.delete(2000)))
                                                                .then(() => message.channel.send(`Bravo ${adversaire} vous avez gagné ${xpMiser}! deso <@${challenger}> *better luck next time :P*`));

                                                            const docChallenger = XLD.findOne({
                                                                ID: challenger + "-" + message.guild.id
                                                            });
                                                            docChallenger.exec((err, doc) => {
                                                                if (err) console.log(err);

                                                                doc.XP -= xpMiser;
                                                                doc.save()

                                                            })


                                                            const docAdversaire = XLD.findOne({
                                                                ID: adversaire.id + "-" + message.guild.id
                                                            });
                                                            docAdversaire.exec((err, doc) => {
                                                                if (err) console.log(err);

                                                                doc.XP += xpMiser;
                                                                doc.save()

                                                            })


                                                        } else if ((collected.first().content === "Pile") && (randomPileFace === "Face")) {
                                                            message.channel.send({files: [join(__dirname, '../../ressources/image/pieceTournant.jpg/')]}).then(m => m.delete(2000))
                                                                .then(() => message.channel.send("suspense...").then(m => m.delete(2000)))
                                                                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/image/pieceFace.jpg')]}).then(m => m.delete(2000)))
                                                                .then(() => message.channel.send(`Bravo <@${challenger}> vous avez gagné ${xpMiser}! deso ${adversaire} *better luck next time :P*`));

                                                            const docChallenger = XLD.findOne({
                                                                ID: challenger + "-" + message.guild.id
                                                            });
                                                            docChallenger.exec((err, doc) => {
                                                                if (err) console.log(err);

                                                                doc.XP += xpMiser;
                                                                doc.save()

                                                            })


                                                            const docAdversaire = XLD.findOne({
                                                                ID: adversaire.id + "-" + message.guild.id
                                                            });
                                                            docAdversaire.exec((err, doc) => {
                                                                if (err) console.log(err);

                                                                doc.XP -= xpMiser;
                                                                doc.save()

                                                            })


                                                        } else if ((collected.first().content === "Face") && (randomPileFace === "Pile")) {

                                                            message.channel.send({files: [join(__dirname, '../../ressources/image/pieceTournant.jpg')]}).then(m => m.delete(2000))
                                                                .then(() => message.channel.send("suspense...").then(m => m.delete(2000)))
                                                                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/image/piecePile.jpg')]}).then(m => m.delete(2000)))
                                                                .then(() => message.channel.send(`Bravo <@${challenger}> vous avez gagné ${xpMiser}! deso ${adversaire} *better luck next time :P*`));

                                                            const docChallenger = XLD.findOne({
                                                                ID: challenger + "-" + message.guild.id
                                                            });
                                                            docChallenger.exec((err, doc) => {
                                                                if (err) console.log(err);

                                                                doc.XP += xpMiser;
                                                                doc.save()

                                                            })


                                                            const docAdversaire = XLD.findOne({
                                                                ID: adversaire.id + "-" + message.guild.id
                                                            });
                                                            docAdversaire.exec((err, doc) => {
                                                                if (err) console.log(err);

                                                                doc.XP -= xpMiser;
                                                                doc.save()

                                                            })

                                                        } else {
                                                            message.channel.send("Mise annuler! vous n'avez pas choisis Pile ou Face!")
                                                        }


                                                    });

                                            });


                                    }
                                });

                                non.on('collect', r => {
                                    message.channel.send("mise Annuler");
                                    return;
                                });

                            })
                        )

                    }

                });

            }

        });
    }

}
