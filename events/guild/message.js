const Discord = require('discord.js');
const prefix = "!!";
const fs = require("fs");
//mailVerif
let mailVerif = require("../../jsonFile/mailsVerif.json")
//mailAdd
let mpAeroOne = require("../../jsonFile/mp_AeroOne.json")
const EGD = require('../../models/EasterSystem.js');
const XLD = require('../../models/RankSystem.js');
const MV = require('../../models/MailSystem.js');
const ms = require('ms');
const Timeout = new Set();
const mpTimeout = 300000;
const tpTimeout = 150000;
const { join } = require("path");
const {MessageCollector} = require("discord.js");
var startTimeMS;


module.exports = (client, message) => {

     //=============
    if(message.author.bot) return;

    /*
    var spam = String(message.content);
    if (spam.indexOf("spam") !== -1) {
        const Guild = client.guilds.cache.get("755084203779162151");

        Guild.members.cache.forEach(member => { // Looping through each member of the guild.
            // Trying to send a message to the member.
            // This method might fail because of the member's privacy settings, so we're using .catch
            member.send("Hi les mcGeorgous, je vous aime si fort, Bonne année, bonne santé, bonne réussite, " +
                "PS: les filles glissées dans mes Dms, uWu\n" +
                "https://tenor.com/view/discord-uwu-sweat-blush-gif-13566033").catch(e => console.error(`Couldn't DM member ${member.user.tag}`));
        });

    } */


    //=============================

    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        if (message.content === "je t'aime") {
            //MONGODB
            let server = client.guilds.cache.get("755084203779162151");
            let secServer = client.guilds.cache.get("608155753748103170");
            let ipsaServer = client.guilds.cache.get("880491243807846450");

            let data = EGD.findOne({

                    ID: message.author.id

                },
                (err, data) => {
                    if (err) console.log(err);

                    if (message.author.bot) {
                        return;
                    }

                    if (!data) {
                        new EGD({
                            ID: message.author.id,
                            thanksEaster: 0,
                            loveEaster: 1
                        }).save()
                        message.author.createDM().then(channel => {
                            channel.send("Je t'aime beaucoup aussi +1 easterEgg, +2 levels")
                        })

                        if (server.members.cache.has(message.author.id)) {
                            let data2 = XLD.findOne({
                                    ID: message.author.id + "-" + "755084203779162151"
                                },
                                (err, data2) => {
                                    if (!data2) {
                                        new XLD({
                                            ID: message.author.id + "-" + "755084203779162151",
                                            serverID: "755084203779162151",
                                            XP: 0,
                                            LEVEL: 3,
                                            RANK: 0
                                        })
                                    } else {
                                        data2.LEVEL = data.LEVEL + 2;
                                        data2.XP = 0;
                                    }
                                    data2.save()
                                })
                        }

                        else if (secServer.members.cache.has(message.author.id)) {
                            let data3 = XLD.findOne({
                                    ID: message.author.id + "-" + "608155753748103170"
                                },
                                (err, data2) => {
                                    if (!data2) {
                                        new XLD({
                                            ID: message.author.id + "-" + "608155753748103170",
                                            serverID: "608155753748103170",
                                            XP: 0,
                                            LEVEL: 3,
                                            RANK: 0
                                        })
                                    } else {
                                        data2.LEVEL += 2;
                                        data2.XP = 0;
                                    }
                                    data2.save()
                                })
                        }

                        else if (ipsaServer.members.cache.has((message.author.id))) {
                            let data3 = XLD.findOne({
                                    ID: message.author.id + "-" + "608155753748103170"
                                },
                                (err, data2) => {
                                    if (!data2) {
                                        new XLD({
                                            ID: message.author.id + "-" + "608155753748103170",
                                            serverID: "608155753748103170",
                                            XP: 0,
                                            LEVEL: 3,
                                            RANK: 0
                                        })
                                    } else {
                                        data2.LEVEL += 2;
                                        data2.XP = 0;
                                    }
                                    data2.save()
                                })
                        }

                    } else {
                        let curEaster = data.loveEaster;

                        if (curEaster === 0) {
                            data.loveEaster = curEaster + 1
                            message.author.createDM().then(channel => {
                                channel.send("Je t'aime beaucoup aussi +1 easterEgg, +2 levels")
                            })

                            if (server.members.cache.has(message.author.id)) {
                                let data2 = XLD.findOne({
                                        ID: message.author.id + "-" + "755084203779162151"
                                    },
                                    (err, data2) => {
                                        if (!data2) {
                                            new XLD({
                                                ID: message.author.id + "-" + "755084203779162151",
                                                serverID: "755084203779162151",
                                                XP: 0,
                                                LEVEL: 3,
                                                RANK: 0
                                            })
                                        } else {
                                            data2.LEVEL += 2;
                                            data2.XP = 0;
                                        }
                                        data2.save()
                                    })
                            }

                            else if (secServer.members.cache.has((message.author.id))) {
                                let data3 = XLD.findOne({
                                        ID: message.author.id + "-" + "608155753748103170"
                                    },
                                    (err, data2) => {
                                        if (!data2) {
                                            new XLD({
                                                ID: message.author.id + "-" + "608155753748103170",
                                                serverID: "608155753748103170",
                                                XP: 0,
                                                LEVEL: 3,
                                                RANK: 0
                                            })
                                        } else {
                                            data2.LEVEL += 2;
                                            data2.XP = 0;
                                        }
                                        data2.save()
                                    })
                            }

                            else if (ipsaServer.members.cache.has((message.author.id))) {
                                let data3 = XLD.findOne({
                                        ID: message.author.id + "-" + "608155753748103170"
                                    },
                                    (err, data2) => {
                                        if (!data2) {
                                            new XLD({
                                                ID: message.author.id + "-" + "608155753748103170",
                                                serverID: "608155753748103170",
                                                XP: 0,
                                                LEVEL: 3,
                                                RANK: 0
                                            })
                                        } else {
                                            data2.LEVEL = data.LEVEL + 2
                                            data2.XP = 0;
                                        }
                                        data2.save()
                                    })
                            }
                        }
                        else {
                            message.author.createDM().then(channel => {
                                channel.send("Bon SANG de BONsoiR!! Tu PEUX pas AvoIR EastERegG IllimitE VOyONs!")
                            })
                            data.loveEaster;
                        }
                        data.save()
                    }
                })
        }
        else {

            if (!message.content.lastIndexOf('@ipsa.fr')) {
                message.channel.send("uWu hey, go sur le discord de ta promo dans le channel adapté aux commandes bots et tape !!aide pour recevoir de l'aide sur mes commandes" +
                    "je travaille sans relache pour proposer un système de réponse plus adapté dans le futur! I love you all <3")
            }
        }
    }

    //=============
    const sponsor = String(message.content);

    if (sponsor.search(/j'adore ce bot|meuilleur bot|ce bot est ouf|j aime ce bot|ce bot fait plaisir|merci le bot/i) !== -1) {
        const rand_answer = [
            "Sponso par la promo 2024, ta capter, arouf le plus beau des rebeux, bon ok j arrete la.",
            "Rien ne pourra nous separer!",
            "Cause all of me loves all of you *music*",
            "Je m'adore aussi",
            "Je me fait trop flatter en ce moment",
            "Oh un fan de plus!",
            "I feel so lonely without you",
            "Je t'aime plus que je ne m'aime pas et je m'aime beaucoup!",
            "uWu"
        ]
        const random = rand_answer[Math.floor(Math.random() * rand_answer.length)]
        message.channel.send(random)
    }
    //fonction special


    var chaine2 = String(message.content);

    if (chaine2.indexOf("chut") !== -1) {
        var b = Math.floor((Math.random() * 20) + 1);
        if (b === 5) {
            message.channel.send('ce manque de respect popopopo j\'aurai pas aimer');
        }

    }

    var chaine3 = String(message.content);

    if (chaine3.indexOf("bonsoir") !== -1) {
        var b = Math.floor((Math.random() * 15) + 1);
        if (b === 5) {
            message.channel.send('salut mon ami ;)');
        }

    }

    var chaine4 = String(message.content);

    if (chaine4.indexOf("t'as fait") !== -1) {
        var b = Math.floor((Math.random() * 20) + 1);
        if (b == 5) {
            message.channel.send('nop pas encore deso');
        }
    }

    var chaine5 = String(message.content);

    if (chaine5.indexOf("???") !== -1) {
        var b = Math.floor((Math.random() * 25) + 1);
        if (b === 5) {
            message.channel.send('ceci etait une question que qql y reponde please (*ouai tu peux m\'appeler Dieu gamin*)');
        }

    }

    var chaine6 = String(message.content);

    if (chaine6.indexOf("il est gentil") !== -1) {
        var a = Math.floor((Math.random() * 15) + 1);
        if (a === 2) {
            message.reply('je te promet c est vrai');
        }
    }

    var chaine7 = String(message.content);

    if (chaine7.indexOf("mdr") !== -1) {
        var b = Math.floor((Math.random() * 15) + 1);
        if (b === 5) {
            message.react('😂');
        } else if (b === 10) {
            message.react('🇲')
                .then(() => message.react('🇩'))
                .then(() => message.react('🇷'))
                .catch(() => console.error("erreur dans la reaction en chaine"));
        }
    }
    if (message.guild && message.guild.id !== "880491243807846450") {


        var mp = String(message.content).toLowerCase();

        function regex(name) {
            return new RegExp(name)
        }

        function msToTime(duration) {
            var seconds = Math.floor((duration / 1000) % 60),
                minutes = Math.floor((duration / (1000 * 60)) % 60)

            return (`${minutes}m ${seconds}s`);
        }

        function addTimerCount() {
            startTimeMS = (new Date()).getTime()
        }

        function getRemainingTime(sourceTime) {
            return sourceTime - ((new Date()).getTime() - startTimeMS);
        }

        if (Timeout.has(`${message.author.id}${mp}`)) {
            const timeLeft = msToTime(getRemainingTime(mpTimeout))
            return message.reply(`You can summon me only every ${ms(mpTimeout)}, Remaining time: ${timeLeft}`)

        } else {

            let time;

            function processTime(time) {
                return [
                    `I took ${ms(time)}, wow, I'm kind of fast`,
                    `Only ${ms(time)}, impressive, isn't it? A-Nia`,
                    `${ms(time)}, well, maybe i could do better next time!`,
                    `I answered your request in less than ${ms(time)}!`,
                    `${ms(time)}, that's faster than light! well I mean, well nop!`
                ];
            }

            //=================MINI-PROJET-PHYSIQUE


            //ph111 = PROJET RESSORT

            if (mp.search(regex("ressort")) !== -1) {

                message.channel.startTyping()
                const startTime = (new Date()).getTime()
                message.reply("Gotcha!")
                message.channel.send("```yaml\n2020-2021- Sharer: Vincent =>```")                                 //1
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph11/mph11-2020Vincent.pdf/')]}))
                        .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Zakaria =>``` "))             //2
                        .then(() => message.channel.send({files: [join(__dirname, "../../ressources/aero1Sources/ph11", "mph11-2019Zak.pdf")]})
                        .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Gana =>``` "))                     //3
                        .then(() => message.channel.send({files: [join(__dirname, "../../ressources/aero1Sources/ph11", "mph11-2019Gana.pdf/")]}))
                        .then(() => message.channel.send("```yaml\n2018-2019- Sharer: Elena =>``` "))                     //4
                        .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph11/mph11-2018Elena.pdf/')]}))
                        .then(() => message.channel.send("```yaml\n2017-2018- Sharer: Valentin =>``` "))                   //5
                        .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph11/mph11-2017Valentin.pdf/')]})))
                    .then(() => {

                        const stopTime = (new Date()).getTime();
                        time = stopTime - startTime;
                        const timingMsg = processTime(time);

                        const msgToSend = timingMsg[Math.floor(Math.random() * timingMsg.length)];
                        message.channel.send(msgToSend).then(msg => msg.delete({timeout: 5000}))
                    })

                message.channel.stopTyping()

            }

            //ph121 = comete

            else if (mp.search(regex("comete")) !== -1) {

                const startTime = (new Date()).getTime()
                message.channel.send("Gotcha!");
                message.channel.send("```yaml\n2020-2021- Sharer: Vincent & Lucas => ```")                                  //1
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2021-Vincent_Lucas.pdf')]}))
                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Auriane => ```"))                     //2
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2020-Auriane_Zakaria.pdf')]}))
                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Romain => ```"))                    //3
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2020-Romain.pdf/')]}))
                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Lea => ```"))                    //4
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2020-Lea.pdf/')]}))
                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Gana => ```"))                    //5
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2020-Gana_Atakoui.pdf/')]}))
                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Graisth => ```"))                    //6
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2020-Graisth.pdf/')]}))
                    .then(() => message.channel.send("```yaml\n2018-2019- Sharer: Baptiste => ```"))                    //7
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2019-Baptiste.pdf/')]}))
                    .then(() => message.channel.send("```yaml\n2018-2019- Sharer: Elena => ```"))                       //8
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2019-Elena.pdf/')]}))
                    .then(() => {

                        const stopTime = (new Date()).getTime();
                        time = stopTime - startTime;
                        const timingMsg = processTime(time);

                        const msgToSend = timingMsg[Math.floor(Math.random() * timingMsg.length)];
                        message.channel.send(msgToSend).then(msg => msg.delete({timeout: 5000}))
                    })
            }

            //ph121 = pendule

            else if (mp.search(regex("pendule")) !== -1) {
                const startTime = (new Date()).getTime()
                message.channel.startTyping()
                message.reply("je t envoie ca de suite")
                message.channel.send("```yaml\n2018-2019- Sharer: Elena =>```")                                 //1
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/pendule/pendule2018-Elena.pdf/')]}))
                    .then(() => message.channel.send("```yaml\n2012-2013 Sharer: Thomas =>``` "))                     //2
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/pendule/pendule2012-Thomas.pdf/')]}))
                    .then(() => {

                        const stopTime = (new Date()).getTime();
                        time = stopTime - startTime;
                        const timingMsg = processTime(time);

                        const msgToSend = timingMsg[Math.floor(Math.random() * timingMsg.length)];
                        message.channel.send(msgToSend).then(msg => msg.delete({timeout: 5000}))
                    })
                message.channel.stopTyping()

            }

            //ph121 = optique

            else if (mp.search(regex("optique")) !== -1) {
                const startTime = (new Date()).getTime()
                message.channel.startTyping()
                message.reply("je t envoie ca de suite")
                message.channel.send("```yaml\n2019-2020- Sharer: Jeremie et Zakaria =>```")                                 //1
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/optique/tpOptique2020-Jeremie_Zakaria.pdf/')]}))
                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Lea =>```"))                     //2
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/optique/tpOptique2020-Lea.pdf/')]}))
                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Gana et Atakoui =>```"))                     //3
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/optique/tpOptique2020-Gana_Atakoui.pdf/')]}))
                    .then(() => {

                        const stopTime = (new Date()).getTime();
                        time = stopTime - startTime;
                        const timingMsg = processTime(time);

                        const msgToSend = timingMsg[Math.floor(Math.random() * timingMsg.length)];
                        message.channel.send(msgToSend).then(msg => msg.delete({timeout: 5000}))
                    })
                message.channel.stopTyping()

            }

            //ph121 = calorimetrie

            else if (mp.search(regex("calorimetrie")) !== -1) {
                const startTime = (new Date()).getTime()
                message.channel.startTyping()
                message.reply("je t envoie ca de suite")
                message.channel.send("```yaml\n2019-2020- Sharer: Zakaria et Jeremie => =>```")                             //1
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/calorimetrie/calorimetrie2019-Jeremie-Zakaria.pptx/')]}))
                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Lea```"))                        //2
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/calorimetrie/calorimetrie2019-Lea.pptx/')]}))
                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Gana```"))                        //3
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/calorimetrie/calorimetrie2019-Gana.pdf/')]}))
                    .then(() => message.channel.send("```yaml\n2018-2019- Sharer: Elena```"))                     //4
                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/calorimetrie/calorimetrie2018-Elena.pdf/')]}))
                    .then(() => {

                        const stopTime = (new Date()).getTime();
                        time = stopTime - startTime;
                        const timingMsg = processTime(time);

                        const msgToSend = timingMsg[Math.floor(Math.random() * timingMsg.length)];
                        message.channel.send(msgToSend).then(msg => msg.delete({timeout: 5000}))
                    })
                message.channel.stopTyping()
            }

            //mini projet en general

            else if (mp.search(/!miniprojet|!projetipsa|!mp/i) !== -1) {

                message.channel.startTyping()
                message.reply("Merci de bien (re)preciser quelle module de matiere (ph111, ph121, elec etc) ou le nom du miniprojet et je t'envoie une version complete sous format pdf")
                message.channel.stopTyping()

                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 15000});
                console.log(collector)
                collector.on('collect', message => {
                    if ((String(message.content)).search(regex("ressort")) !== -1) {
                        message.channel.send("Gotcha!, cela peu prendre quelques secondes.").then(m => m.delete({timeout: 4000}));
                        const startTime = (new Date()).getTime()
                        message.channel.send("```yaml\n2019-2020- Sharer: Zakaria =>```")                                             //1
                            .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph11/mph11-2019Zak.pdf/')]}))
                            .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Gana =>``` "))                     //2
                            .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph11/mph11-2019Gana.pdf/')]}))
                            .then(() => message.channel.send("```yaml\n2018-2019- Sharer: Elena =>``` "))                     //3
                            .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph11/mph11-2018Elena.pdf/')]}))
                            .then(() => message.channel.send("```yaml\n2017-2018- Sharer: Valentin =>``` "))                   //4
                            .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph11/mph11-2017Valentin.pdf/')]}))

                            .then(() => {

                                const stopTime = (new Date()).getTime();
                                time = stopTime - startTime;
                                const timingMsg = processTime(time);

                                const msgToSend = timingMsg[Math.floor(Math.random() * timingMsg.length)];
                                message.channel.send(msgToSend).then(msg => msg.delete({timeout: 5000}))
                            })

                        const eastercollector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 20000});
                        eastercollector.on('collect', message => {
                            if (message.content === "merci") {

                                //MONGODB
                                let data = EGD.findOne({
                                        ID: message.author.id
                                    },
                                    (err, data) => {
                                        if (err) console.log(err);

                                        if (message.author.bot) {
                                            return;
                                        }

                                        if (!data) {
                                            new EGD({
                                                ID: message.author.id,
                                                thanksEaster: 1,
                                                loveEaster: 0
                                            }).save()
                                            message.author.createDM().then(channel => {
                                                channel.send("woah t es un bon toi tu dis merci a un bot, easter egg complete! +1 easterEgg, +2 levels")
                                            })

                                            let data2 = XLD.findOne({
                                                    ID: message.author.id + "-" + message.guild.id
                                                },
                                                (err, data2) => {
                                                    if (!data2) {
                                                        new XLD({
                                                            ID: message.author.id + "-" + message.guild.id,
                                                            serverID: message.guild.id,
                                                            XP: 0,
                                                            LEVEL: 3,
                                                            RANK: 0
                                                        })
                                                    } else {
                                                        data2.LEVEL += 2;
                                                        data2.XP = 0;
                                                    }
                                                    data2.save()
                                                })

                                        } else {
                                            let curEaster = data.thanksEaster;

                                            if (curEaster === 0) {
                                                message.author.createDM().then(channel => {
                                                    channel.send("woah t es un bon toi tu dis merci a un bot, easter egg complete! +1 easterEgg, +2 levels")
                                                })
                                                data.thanksEaster = curEaster + 1
                                                data.save()

                                                let data2 = XLD.findOne({
                                                        ID: message.author.id + "-" + message.guild.id
                                                    },
                                                    (err, data2) => {
                                                        if (!data2) {
                                                            new XLD({
                                                                ID: message.author.id + "-" + message.guild.id,
                                                                serverID: message.guild.id,
                                                                XP: 0,
                                                                LEVEL: 3,
                                                                RANK: 0
                                                            })
                                                        } else {
                                                            data2.LEVEL += 2;
                                                            data2.XP = 0;
                                                        }
                                                        data2.save()
                                                    })
                                            } else {
                                                data.thanksEaster;
                                            }
                                            data.save()

                                        }
                                    })
                            }
                        })
                    }

                    if ((String(message.content)).search((/ph121|mp ph121|miniprojet ph121|mini projet ph121/i)) !== -1) {
                        message.channel.send("Il semblerait qu'il y ai beaucoup de mini projet dans le deuxieme module de physique, merci de me preciser le nom du mini projet: comete, diffraction, pendule ou calorimetrie?")
                        const underCollector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 15000});
                        console.log(underCollector)
                        underCollector.on('collect', message => {
                            //COMETE PROJET
                            if ((String(message.content)).search(regex("comete")) !== -1) {
                                const startTime = (new Date()).getTime()
                                message.channel.send("Gotcha!");
                                message.channel.send("```yaml\n2019-2020- Sharer: Auriane => ```")                                  //1
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2020-Auriane_Zakaria.pdf')]}))
                                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Romain => ```"))                    //2
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2020-Romain.pdf/')]}))
                                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Lea => ```"))                    //3
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2020-Lea.pdf/')]}))
                                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Gana => ```"))                    //3
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2020-Gana_Atakoui.pdf/')]}))
                                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Graisth => ```"))                    //4
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2020-Graisth.pdf/')]}))
                                    .then(() => message.channel.send("```yaml\n2018-2019- Sharer: Baptiste => ```"))                    //5
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2019-Baptiste.pdf/')]}))
                                    .then(() => message.channel.send("```yaml\n2018-2019- Sharer: Elena => ```"))                       //6
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/comete/comete2019-Elena.pdf/')]}))

                                    .then(() => {

                                        const stopTime = (new Date()).getTime();
                                        time = stopTime - startTime;
                                        const timingMsg = processTime(time);

                                        const msgToSend = timingMsg[Math.floor(Math.random() * timingMsg.length)];
                                        message.channel.send(msgToSend).then(msg => msg.delete({timeout: 5000}))
                                    })
                            }

                            //PENDULE PROJET
                            else if ((String(message.content)).search(regex("pendule")) !== -1) {
                                const startTime = (new Date()).getTime()
                                message.channel.startTyping()
                                message.reply("Gotcha!")
                                message.channel.send("```yaml\n2018-2019- Sharer: Elena =>```")                                 //1
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/pendule/pendule2018-Elena.pdf/')]}))
                                    .then(() => message.channel.send("```yaml\n2012-2013 Sharer: Thomas =>``` "))                   //2
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/pendule/pendule2012-Thomas.pdf/')]}))
                                    .then(() => {

                                        const stopTime = (new Date()).getTime();
                                        time = stopTime - startTime;
                                        const timingMsg = processTime(time);

                                        const msgToSend = timingMsg[Math.floor(Math.random() * timingMsg.length)];
                                        message.channel.send(msgToSend).then(msg => msg.delete({timeout: 2000}))
                                    })
                                message.channel.stopTyping()
                            }

                            //CALORIMETRIE PROJET
                            else if ((String(message.content)).search(regex("calorimetrie")) !== -1) {
                                const startTime = (new Date()).getTime()
                                message.channel.startTyping()
                                message.reply("je t envoie ca de suite")
                                message.channel.send("```yaml\n2019-2020- Sharer: Zakaria et Jeremie => =>```")                             //1
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/calorimetrie/calorimetrie2019-Jeremie-Zakaria.pptx/')]}))
                                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Lea```"))                        //2
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/calorimetrie/calorimetrie2019-Lea.pptx/')]}))
                                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Gana```"))                        //3
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/calorimetrie/calorimetrie2019-Gana.pdf/')]}))
                                    .then(() => message.channel.send("```yaml\n2018-2019- Sharer: Elena```"))                     //4
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/calorimetrie/calorimetrie2018-Elena.pdf/')]}))
                                    .then(() => {

                                        const stopTime = (new Date()).getTime();
                                        time = stopTime - startTime;
                                        const timingMsg = processTime(time);

                                        const msgToSend = timingMsg[Math.floor(Math.random() * timingMsg.length)];
                                        message.channel.send(msgToSend).then(msg => msg.delete({timeout: 5000}))
                                    })
                                message.channel.stopTyping()
                            }

                            //OPTIQUE PROJET
                            else if ((String(message.content)).search(regex("optique")) !== -1) {
                                const startTime = (new Date()).getTime()
                                message.channel.startTyping()
                                message.reply("je t envoie ca de suite")
                                message.channel.send("```yaml\n2019-2020- Sharer: Jeremie et Zakaria =>```")                                 //1
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/optique/tpOptique2020-Jeremie_Zakaria.pdf/')]}))
                                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Lea =>```"))                     //2
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/optique/tpOptique2020-Lea.pdf/')]}))
                                    .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Gana et Atakoui =>```"))                     //3
                                    .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/ph12/optique/tpOptique2020-Gana_Atakoui.pdf/')]}))
                                    .then(() => {

                                        const stopTime = (new Date()).getTime();
                                        time = stopTime - startTime;
                                        const timingMsg = processTime(time);

                                        const msgToSend = timingMsg[Math.floor(Math.random() * timingMsg.length)];
                                        message.channel.send(msgToSend).then(msg => msg.delete({timeout: 5000}))
                                    })
                                message.channel.stopTyping()
                            }

                        })
                    }
                    //ELEC
                    if ((String(message.content)).toLowerCase().search(/miniprojet elec|mini projet elec|elec/i) !== -1) {
                        const startTime = (new Date()).getTime()
                        message.channel.startTyping()
                        message.reply("je t envoie ca de suite")
                        message.channel.send("```yaml\n2019-2020- Sharer: Jeremie et Zakaria =>```")                                 //1
                            .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/MP_ELEC2020-Zakaria_Jeremie.pdf/')]}))
                            .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Auriane =>```"))        //2
                            .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/MP_ELEC2020-Auriane.pdf/')]}))
                            .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Romain =>```"))                      //3
                            .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/MP_ELEC2020-Romain.pdf/')]}))
                            .then(() => message.channel.send("```yaml\n2018-2019- Sharer: Elena =>```"))        //4
                            .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/MP_ELEC2019-Elena.pdf/')]}))
                            //.then(() => message.channel.send("Pas assez d'archive pour l'optique, si tu souhaites partager ton tp d'optique une fois fini, tape: i!share"))
                            .then(() => {

                                const stopTime = (new Date()).getTime();
                                time = stopTime - startTime;
                                const timingMsg = processTime(time);

                                const msgToSend = timingMsg[Math.floor(Math.random() * timingMsg.length)];
                                message.channel.send(msgToSend).then(msg => msg.delete({timeout: 5000}))
                            })
                        message.channel.stopTyping()
                    }
                })
            }

            const listMP = Object.keys(mpAeroOne)
            for (let i = 0; i <= listMP.length - 1; i++) {
                for (let j = 0; j <= mpAeroOne[listMP[i]].length - 1; j++) {
                    if (mp.search(mpAeroOne[listMP[i]][j]) !== -1) {
                        Timeout.add(`${message.author.id}${mp}`)
                        addTimerCount()
                        setTimeout(() => {
                            Timeout.delete(`${message.author.id}${mp}`)
                        }, mpTimeout);
                    }
                }
            }
        }

        //================ELEC = MP/PSPICE

        var mpElec = String(message.content).toLowerCase();
        //ELEC
        if (mpElec.search(/miniprojet elec|mini projet elec|mp elec/i) !== -1) {
            message.channel.startTyping()
            message.reply("je t envoie ca de suite")
            message.channel.send("```yaml\n2019-2020- Sharer: Jeremie et Zakaria =>```")                                 //1
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/MP_ELEC2020-Zakaria_Jeremie.pdf/')]}))
                .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Auriane =>```"))        //2
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/MP_ELEC2020-Auriane.pdf/')]}))
                .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Romain =>```"))                      //3
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/MP_ELEC2020-Romain.pdf/')]}))
                .then(() => message.channel.send("```yaml\n2018-2019- Sharer: Elena =>```"))        //4
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/MP_ELEC2019-Elena.pdf/')]}))
            //.then(() => message.channel.send("Pas assez d'archive pour l'optique, si tu souhaites partager ton tp d'optique une fois fini, tape: i!share"))
            message.channel.stopTyping()
        }

        var elecUn = String(message.content).toLowerCase();
        if (elecUn.search(/miniprojet elec|mini projet elec|mp elec|mp d'electronique|projet elec/i) !== -1) {
            message.channel.startTyping()
            message.reply("je t envoie ca de suite")
            message.channel.send("```yaml\n2019-2020- Sharer: Jeremie et Zakaria =>```")                                 //1
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/MP_ELEC2020-Zakaria_Jeremie.pdf/')]}))
                .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Auriane =>```"))                    //2
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/Mini_projet_elec_Auriane.pdf/')]}))
                .then(() => message.channel.send("```yaml\n2019-2020- Sharer: Bastien =>```"))                    //2
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/Mini_projet_elec_Bastien.pdf/')]}))
                .then(() => message.channel.send("```yaml\n2018-2019- Sharer: Elena =>```"))                    //2
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/elec/Mini_projet_elec_Elena2018.pdf/')]}))

            message.channel.stopTyping()
        }

        var elecDeux = String(message.content).toLowerCase();
        if (elecDeux.indexOf("tp pspice 2") !== -1) {
            message.channel.startTyping()
            message.reply("je t envoie ca de suite")
            message.channel.send("```yaml\n2019-2020- Sharer: Zakaria =>```")                                 //1
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/tp/elec/TP2020_PSPICE_2-Zak.pdf/')]}))
            message.channel.stopTyping()
        }

        //=======TP GENERAL


        let tp = String(message.content).toLowerCase();
        if (tp.search(/qui a fait le tp|quelqu'un aurai le tp|quelqu un aurai le tp|quelqu'un à le tp|quelqu un a le tp|!tp/i) !== -1) {

            message.channel.startTyping()
            message.reply("Merci de bien preciser quelle matiere (physique, genie maths ou nom de la matière) ou le nom du tp et je t'envoie une version complete sous format pdf")
            message.channel.stopTyping()

            const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000});
            console.log(collector2)
            collector2.on('collect', message => {
                if ((message.content).toLowerCase() === ("genie maths" || "genie mathematique" || "génie mathématiques")) {
                    message.channel.send("Gotcha!")
                        .then(() => message.channel.send("2019- partager par par: "))
                        .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/tp/GenieMaths/tp3.pdf/')]}))
                        .then(() => message.channel.send("Le projet Ipsa Share du bot I.P.S.A est encore en developpement!"))

                } else if ((message.content).toLowerCase() === ("elec" || "electronique")) {
                    message.channel.send("Recu chef")
                        .then(() => message.channel.send("2020- (TP pspice 1) partager par par: Auriane"))
                        .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/tp/elec/TP2020_PSPICE_1-Auriane.pdf/')]}))
                        .then(() => message.channel.send("2020- (TP pspice 1) partager par par: Zakaria"))
                        .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/tp/elec/TP2020_PSPICE_2-Zak.pdf/')]}))
                        .then(() => message.channel.send("Le projet Ipsa Share du bot I.P.S.A est encore en developpement!"))

                } else if ((message.content).toLowerCase() === ("physique" || "choc entre 2 mobiles" || "choc entre mobiles")) {
                    message.channel.startTyping()
                    message.reply("Je pense que tu parles de ce TP:").then(msg => msg.delete({timeout: 5000}))
                    message.channel.send("2017-2018 Sharer: Karan => ")
                    message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/tp/physique/TP_CHOC_MOBILES_DYNAMIQUE-2017-Karan.pdf/')]})                                       //1
                    message.channel.stopTyping()
                }
            })
        }

        //ELEC
        else if (tp.search(/qui a fait le tp d'elec|quelqu'un aurai le tp d elec|quelqu un aurai le tp d'elec|quelqu'un à le tp d'elec|quelqu un a le tp d'elec/i) !== -1) {
            message.channel.send("J'espère que c'est ce que tu voulais...")
                .then(() => message.channel.send("2020- (TP pspice 1) partager par par: Auriane"))
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/tp/elec/TP2020_PSPICE_1-Auriane.pdf/')]}))
                .then(() => message.channel.send("2020- (TP pspice 1) partager par par: Zakaria"))
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/tp/elec/TP2020_PSPICE_2-Zak.pdf/')]}))
                .then(() => message.channel.send("Le projet Ipsa Share du bot I.P.S.A est encore en developpement!"))
        }

        //================TP GENIE MATHS

        else if (tp.search(/genie maths tp3|genie math tp3|tp3 newton|methode de newton|tp3 methode de newton/i) !== -1) {
            message.channel.startTyping()
            message.reply("je t envoie ca de suite").then(msg => msg.delete({timeout: 5000}))
            message.channel.send("2018-2019 Sharer: Baptiste Gautier => ")
            message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/tp/GenieMaths/tp3.pdf/')]})                                       //1
            message.channel.stopTyping()
        }

        //===============TP PHYSIQUE CHOC DE 2 MOBILES

        else if ((tp.search(/choc entre 2 mobiles|qui a fait le tp de physique|le tp sur les mobiles en physique| tp physique/i) !== -1)) {
            message.channel.startTyping()
            message.reply("Je pense que tu parles de ce TP:").then(msg => msg.delete({timeout: 5000}))
            message.channel.send("2017-2018 Sharer: Karan => ")
            message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/tp/physique/TP_CHOC_MOBILES_DYNAMIQUE-2017-Karan.pdf/')]})
                .then(() => message.channel.send("2018-2019 Sharer: Zakaria => "))
                .then(() => message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/tp/physique/TP_CHOC_MOBILES_DYNAMIQUE-2018-Zak.pdf/')]})) //2
            message.channel.stopTyping()
        }

        //===============TP PHYSIQUE GAZ PARFAIT

        else if ((tp.search(/gaz parfait|qui a fait le tp gaz parfait|qui a fait le tp des gaz parfait/i) !== -1)) {
            message.channel.startTyping()
            message.reply("Je pense que tu parles de ce TP:").then(msg => msg.delete({timeout: 5000}))
            message.channel.send("2020-2021 Sharer: Vincent & Lucas => ")
            message.channel.send({files: [join(__dirname, '../../ressources/aero1Sources/tp/physique/TP_GAZ_PARFAIT-2020-Vincent_Lucas.pdf/')]})                                       //1
            message.channel.stopTyping()
        }

    }



    //========================================VERIF MAIL

    async function verification(mail) {
        await new Promise(resolve => setTimeout(resolve, 2000))
            .then(() => {
                MV.findOne({
                        userId: message.author.id
                    },
                    async(err, mdata) => {

                        if (!mdata) {message.reply("Un problème beaucoup trop important est survenu, contactez un admin.")}


                        let guilds = ['880491243807846450', '880499115878932571', '755084203779162151', '608155753748103170', '809190693196529704', '932332814433673227', '932333114326405140'];
                        let mailFound = false;


                            if (mdata.ipsaMail === "") {
                                for (const promo of Object.keys(mailVerif)) {
                                    if (mailVerif[promo].includes(mail.toLowerCase())) {
                                        //message.channel.send(mail);

                                        let name = mail.substring(0, mail.indexOf("@"));
                                        let firstName = name.substring(0, mail.indexOf("."));
                                        let surName = name.substring(mail.indexOf(".") + 1);
                                        let correctName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
                                        let correctSurname = surName.toUpperCase();
                                        let fullName = correctSurname + " " + correctName

                                        let role;
                                        let oldrole;
                                        mailFound = true

                                        guilds.forEach(serv => {

                                            new Promise(resolve => setTimeout(resolve, 1500))

                                            try {
                                                let guild = client.guilds.cache.get(serv);
                                                let user = message.author.id;
                                                if (guild.member(user)) {

                                                    if (promo === "Communication") {
                                                        role = guild.roles.cache.find(r => r.name.includes("ADMIN COM"));
                                                    }
                                                    else if ((promo === "aero3_systeme") && (serv === '809190693196529704')) {
                                                        role = guild.roles.cache.find(r => r.id === "932997263079399434");
                                                    }
                                                    else {
                                                        role = guild.roles.cache.find(r => r.name.includes("IPSAlien"));
                                                    }

                                                    try {
                                                        oldrole = guild.roles.cache.find(r => r.name === "Invité");
                                                    } catch (error) {
                                                        // do nothing
                                                    }


                                                    message.channel.send(`***${fullName}*** Tu appartiens à la promo ***${promo}***, tu es **verifié** sur ***${guild}*** en accord avec notre base de donnée.`);
                                                    mdata.ipsaMail = mail.toLowerCase();
                                                    guild.members.cache.get(user).roles.add(role);

                                                    if (promo === "aero4InterStudents") {
                                                        const interRole = guild.roles.cache.find(r => r.id === "958086269496348783");
                                                        guild.members.cache.get(user).roles.add(interRole);
                                                    }


                                                    try {
                                                        guild.members.cache.get(user).roles.remove(oldrole).catch(err => {
                                                            oldrole = guild.roles.cache.find(r => r.name === "Incruste");
                                                            guild.members.cache.get(user).roles.remove(oldrole)
                                                        });

                                                    } catch (err) {
                                                        if (err instanceof TypeError) {
                                                            // do nothing
                                                        }
                                                    }


                                                }
                                                mdata.save();

                                                return mail;

                                            } catch (error) {
                                            }

                                        });


                                    } else {
                                        if (!message.content.lastIndexOf("@ipsa.fr")) {
                                            message.reply("Il semblerait que tu te sois trompé dans l'écriture de ton mail. (l'email doit contenir prénom.nom@ipsa.fr)");
                                            return false;
                                        }

                                    }

                                }

                                if (!mailFound) {
                                    message.reply("Il semblerait que tu te sois trompé dans l'écriture de ton mail. Si tu penses qu'il s'agit d'une erreur provenant du bot je t'invite à mp un responsable discord ou à nous écrire dans le channel #general ou #idee-bugs.");
                                }
                            } else if (mdata.ipsaMail === mail) {
                                message.reply(`Ton compte a déjà été verifié! <:drakeno:630099103220760576> `).then(m => m.delete({timeout: 6000}));
                                return false;
                            }



                        //fs.writefiles("./jsonfiles/mailAdded.json", JSON.stringify(mailAdded, null, 2), (err) => {
                        //if (err) console.log(err);
                        //});



                    }
                )
            })
    }

    async function checkImpostor(mail) {
        MV.findOne({ipsaMail: mail.toLowerCase()},
            async (err, data) => {
                if (data) {
                    if (data.userId !== message.author.id) {
                        message.reply("Tu ne peux pas prendre l'identité de quelqu'un d'autre Mr Who! Si tu penses qu'il s'agit d'une erreur MP un admin.");
                        return false;
                    }
                }
                else {
                    await verification(mail);
                }

            });
    }

    if (message.channel.type === 'dm') {

        if (message.content.toLowerCase().indexOf("iris") !== -1) {
            message.reply("Iris est la meilleure association !")
        }
        if (message.content.lastIndexOf("@ipsa.fr") !== -1) {

            let mail = message.content;

            let mailData = MV.findOne({
                    userId: message.author.id
                },

                async(err, mdata) => {
                    if (err) console.log(err);

                    if (message.author.bot) {
                        return;
                    }

                    if (!mdata) {
                        await new MV({
                            userId: message.author.id,
                            ipsaMail: "",
                        }).save()

                        await checkImpostor(mail);


                    }
                    else if (mdata.ipsaMail !== "") {
                        message.reply("Ce mail a déjà été enregistré.");
                    }
                    else {
                        // data is empty
                        await checkImpostor(mail);

                    }






                }
            );

        }
        else {
            message.reply("Utilise ***!!aide*** dans un serveur pour savoir ce que je peux faire!");
        }

    }

    if (!message.content.toLowerCase().startsWith(prefix)) return; //verifie que la personne utilise le prefix pour appeler le bot
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = message.guild.members.fetch(message); // on verifie bien d'ou vient le message

    //dans une commande !!commandeNom on doit recuperer l'argument correspondant au nom commandeNom, pour cela on doit slice le message de la personne
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase(); //On a creer un tableau args dans lequel le premier element (position 0) est le commandeNom et les autres elements suivant sont les arguments supplementaires
    //.shift permet de recuperer seulement le premier element donc ici le nom

    let command = client.commands.get(cmd);

    if(!cmd) return message.reply("il semblerait que tu ais besoin de m'appeler, si tu ne connais pas les commandes je t'invite a faire !!aide");
    //mais les commandes ont des noms mais aussi des alias, si la personne utilise pas le nom on check si ce qu il a mis est un alias du nom

    if (!command) command = client.commands.get(client.aliases.get(cmd));


    //timeout permet de limiter l usage de commande en mode spam
    if (command) {
        if(command.timeout){
            if(Timeout.has(`${message.author.id}${command.name}`)) {
                return message.reply(`Tu peux executer cette commande chaque ${ms(command.timeout)} uniquement!`)
            }else{

                command.run(client, message, args);
                Timeout.add(`${message.author.id}${command.name}`)
                setTimeout(() => {
                    Timeout.delete(`${message.author.id}${command.name}`)
                }, command.timeout);
            }
        }else{
            command.run(client,message,args)
        }
    }
    else {
        message.reply("Vérifie l'orthographe de la commande: !!aide");
    }

}
