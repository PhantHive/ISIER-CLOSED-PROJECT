const Discord = require('discord.js');
const prefix = "i!";
const fs = require("fs");
//mailVerif
let mailVerif = require("../../jsonFile/mailsVerif.json")
//mailAdd
let mailAdded = require("../../jsonFile/mailAdded.json")
const EGD = require('../../models/EasterSystem.js');
const XLD = require('../../models/RankSystem.js');


module.exports = async(client, message) => {



    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        if (message.content === "je t'aime") {
            //MONGODB
            let server = client.guilds.get("755084203779162151")
            let secServer = client.guilds.get("608155753748103170")
            let testServer = client.guilds.get("502931781012684818")

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

                        if (server.fetchMember(message.author.id)) {
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

                        if (secServer.fetchMember(message.author.id)) {
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

                        if (testServer.fetchMember((message.author.id))) {
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

                            if (server.fetchMember(message.author.id)) {
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

                            if (secServer.fetchMember((message.author.id))) {
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

                            if (testServer.fetchMember((message.author.id))) {
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
            message.channel.send("Go sur le discord de ta promo dans le channel adapté aux commandes bots et tape i!aide pour recevoir de l'aide sur mes commandes" +
                "je travaille sans relache pour proposer un système de réponse plus adapté dans le futur! I love you all <3")
        }
    }
    //=============
    if(message.author.bot) return;

    var sponso = String(message.content);
    const rand_answer = [
        "Oe je me presente je m'appel IPSA bot de nice, Sponso par la promo 2024, ta capter, arouf le plus beau des rebeux, bon ok j arrete la.",
        "Rien ne pourra nous separer!",
        "Cause all of me loves all of you *music*",
        "Je m'adore aussi",
        "Je me fait trop flatter en ce moment",
        "Oh un fan de plus!",
        "I feel so lonely without you",
        "Je t'aime plus que je ne m'aime pas et je m'aime beaucoup!"
    ]
    //rando_imgs[Math.floor(Math.random() * rando_imgs.length * 2)]
    if (sponso.indexOf("j adore ce bot" || "meuilleur bot" || "ce bot est ouf" || "j aime ce bot" || "ce bot fait plaisir" || "merci le bot") !== -1) {
        message.channel.send(rand_answer[Math.floor(Math.random() * rand_answer.length )])
    }
    //fonction special

    //dropbox
    var chaine = String(message.content);

    if (chaine.indexOf("dropbox") !== -1) {
        const dropboxChannel = message.guild.channels.find(channel => channel.name === "🎓▶liens-et-ressources-utiles◀🎓");
        message.reply(`Go ici amigo=> ${dropboxChannel}` );
    }

    //catia
    var catia = String(message.content);

    if (catia.indexOf("comment installer catia" || "installe catia") !== -1) {
        const dropboxChannel = message.guild.channels.find(channel => channel.name === "🎓▶liens-et-ressources-utiles◀🎓");
        message.reply(`Check ce channel, ca pourrai repondre a ta question padawan =>  => ${dropboxChannel}` );
    }


    var chaine2 = String(message.content);

    if (chaine2.indexOf("chut") !== -1) {
        var b = Math.floor((Math.random() * 15) + 1);
        if (b == 5) {
            message.channel.send('ce manque de respect popopopo j\'aurai pas aimer');
        }

    }

    var chaine3 = String(message.content);

    if (chaine3.indexOf("bonsoir") !== -1) {
        var b = Math.floor((Math.random() * 15) + 1);
        if (b == 5) {
            message.channel.send('salut mon ami ;)');
        }

    }

    var chaine4 = String(message.content);

    if (chaine4.indexOf("t'as fait") !== -1) {
        var b = Math.floor((Math.random() * 15) + 1);
        if (b == 5) {
            message.channel.send('nop pas encore deso');
        }
    }

    var chaine5 = String(message.content);

    if (chaine5.indexOf("???") !== -1) {
        var b = Math.floor((Math.random() * 15) + 1);
        if (b == 5) {
            message.channel.send('ceci etait une question que qql y reponde please (*ouai tu peux m\'appeler Dieu gamin*)');
        }

    }

    var chaine6 = String(message.content);

    if (chaine6.indexOf("il est gentil") !== -1) {
        var a = Math.floor((Math.random() * 15) + 1);
        if (a == 2) {
            message.reply('je te promet c est vrai tavu');
        }
    }

    var chaine7 = String(message.content);

    if (chaine7.indexOf("mdr") !== -1) {
        var b = Math.floor((Math.random() * 15) + 1);
        if (b == 5) {
            message.react('😂');
        }
        else if (b == 10) {
            message.react('🇲')
                .then(() => message.react('🇩'))
                .then(() => message.react('🇷'))
                .catch(() => console.error("erreur dans la reaction en chaine"));
        }
    }



    //=================MINI-PROJET-PHYSIQUE

    //ph111 = PROJET RESSORT

    var mp = String(message.content);

    if (mp.search(/mp ph111|miniprojet ph111|projet ressort|miniprojet ressort|mp ressort|mini projet resort|mini projet ph111/i) !== -1) {

        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Zakaria =>```")                                 //1
            .then(() => message.channel.send({file: './aero1Sources/ph11/mph11-2019Zak.pdf/'}))
            .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>``` "))                     //2
            .then(() => message.channel.send({file: './aero1Sources/ph11/mph11-2018Elena.pdf/'}))
            .then(() => message.channel.send("```yaml\nAnnee 2017-2018- partager par: Valentin =>``` "))                   //3
            .then(() => message.channel.send({file: './aero1Sources/ph11/mph11-2017Valentin.pdf/'}))
        message.channel.stopTyping()

    }

    //ph121 = pendule


    else if (mp.search( /projet pendule|miniprojet pendule|mp pendule/i) !== -1) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>```")                                 //1
            .then(() => message.channel.send({file: './aero1Sources/ph12/pendule/pendule2018-Elena.pdf/'}))
            .then(() => message.channel.send("```yaml\nAnnee 2012-2013 partager par: Thomas =>``` "))                     //2
            .then(() => message.channel.send({file: './aero1Sources/ph12/pendule/pendule2012-Thomas.pdf/'}))
        message.channel.stopTyping()

    }

    //ph121 = optique


    else if (mp.search( /projet optique|miniprojet optique|mp optique|tp optique|mp diffraction|tp diffraction|projet diffraction/i) !== -1) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Jeremie et Zakaria =>```")                                 //1
            .then(() => message.channel.send({file: './aero1Sources/ph12/optique/tpOptique2020-Jeremie_Zakaria.pdf/'}))
            .then(() => message.channel.send("```yaml\nAnnee 2019-2020- partager par: Lea =>```"))                     //2
            .then(() => message.channel.send({file: './aero1Sources/ph12/optique/tpOptique2020-Lea.pdf/'}))
        message.channel.stopTyping()

    }

    //ph121 = calorimetrie

    else if (mp.search( /projet calorimetrie|miniprojet calorimetrie|mp calorimetrie|tp calorimetrie/i) !== -1) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2018-2019- partager par: Zakaria et Jeremie => =>```")                             //1
            .then(() => message.channel.send({file: './aero1Sources/ph12/calorimetrie/calorimetrie2019-Jeremie-Zakaria.pptx/'}))
            .then(() => message.channel.send("```yaml\nAnnee 2019-2020- partager par: Lea```"))                        //2
            .then(() => message.channel.send({file: './aero1Sources/ph12/calorimetrie/calorimetrie2019-Lea.pptx/'}))
            .then(() => message.channel.send("```yaml\nAnnee 2019-2020- partager par: Elena```"))                     //3
            .then(() => message.channel.send({file: './aero1Sources/ph12/calorimetrie/calorimetrie2018-Elena.pdf/'}))

        message.channel.stopTyping()

    }


    //mini projet en general

    else if (mp.search(/mini projet|mini projet ipsa/i) !== -1 ) {

        message.channel.startTyping()
        message.reply("Merci de bien (re)preciser quelle module de matiere (ph111, ph121, elec etc) ou le nom du miniprojet et je t'envoi une version complete sous format pdf")
        message.channel.stopTyping()

        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 15000 });
        console.log(collector)
        collector.on('collect', message => {
            if ((message.content).toLowerCase() === ("ph111" || "ressort")) {
                message.channel.send("c'est tout bon pour moi je t'envoi ca, cela peu prendre quelques secondes.").then(m => m.delete(4000));
                message.channel.send("```yaml\nAnnee 2019-2020- partager par: Zakaria =>```")                                   //1
                    .then(() => message.channel.send({file: './aero1Sources/ph11/mph11-2019Zak.pdf/'}))
                    .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>``` "))                       //2
                    .then(() => message.channel.send({file: './aero1Sources/ph11/mph11-2018Elena.pdf/'}))
                    .then(() => message.channel.send("```yaml\nAnnee 2017-2018- partager par: Valentin =>``` "))                     //3
                    .then(() => message.channel.send({file: './aero1Sources/ph11/mph11-2017Valentin.pdf/'}))

                const eastercollector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 20000 });
                eastercollector.on('collect', message => {
                    if(message.content === "merci") {

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
                                    }
                                    else {
                                        data.thanksEaster;
                                    }
                                    data.save()

                                }
                            })
                    }
                })
            }

            if ((message.content).toLowerCase() === ("ph121" || "mp ph121" || "miniprojet ph121" || "mini projet ph121")) {
                message.channel.send("Il semblerait qu'il y ai beaucoup de mini projet dans le deuxieme module de physique, merci de me preciser le nom du mini projet: comete, diffraction, pendule ou calorimetrie?")
                const underCollector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 15000});
                console.log(underCollector)
                underCollector.on('collect', message => {
                    //COMETE PROJET
                    if (message.content === ("comete" || "halley" || "comete halley" || "mini projet comète de Halley" || "comète de Halley")) {
                        message.channel.send("c'est tout bon pour moi je t'envoi ca");
                        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Auriane => ```")                                  //1
                            .then(() => message.channel.send({file: './aero1Sources/ph12/comete/comete2020-Auriane_Zakaria.pdf'}))
                            .then(() => message.channel.send("```yaml\nAnnee 2019-2020- partager par: Romain => ```"))                    //2
                            .then(() => message.channel.send({file: './aero1Sources/ph12/comete/comete2020-Romain.pdf/'}))
                            .then(() => message.channel.send("```yaml\nAnnee 2019-2020- partager par: Lea => ```"))                    //3
                            .then(() => message.channel.send({file: './aero1Sources/ph12/comete/comete2020-Lea.pdf/'}))
                            .then(() => message.channel.send("```yaml\nAnnee 2019-2020- partager par: Graisth => ```"))                    //4
                            .then(() => message.channel.send({file: './aero1Sources/ph12/comete/comete2020-Graisth.pdf/'}))
                            .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Baptiste => ```"))                    //5
                            .then(() => message.channel.send({file: './aero1Sources/ph12/comete/comete2019-Baptiste.pdf/'}))
                            .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena => ```"))                       //6
                            .then(() => message.channel.send({file: './aero1Sources/ph12/comete/comete2019-Elena.pdf/'}))
                    }

                    //PENDULE PROJET
                    else if ((message.content).toLowerCase() === ("pendule" || "projet pendule" || "mini projet pendule")) {
                        message.channel.startTyping()
                        message.reply("c'est tout bon pour moi je t'envoi ca")
                        message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>```")                                 //1
                            .then(() => message.channel.send({file: './aero1Sources/ph12/pendule/pendule2018-Elena.pdf/'}))
                            .then(() => message.channel.send("```yaml\nAnnee 2012-2013 partager par: Thomas =>``` "))                   //2
                            .then(() => message.channel.send({file: './aero1Sources/ph12/pendule/pendule2012-Thomas.pdf/'}))
                        message.channel.stopTyping()
                    }

                    //CALORIMETRIE PROJET
                    else if ((message.content).toLowerCase() ===  ("projet calorimetrie" || "miniprojet calorimetrie" || "mp calorimetrie" || "tp calorimetrie" || "calorimetrie")) {
                        message.channel.startTyping()
                        message.reply("je t envoi ca de suite")
                        message.channel.send("```yaml\nAnnee 2018-2019- partager par: Zakaria et Jeremie => =>```")                             //1
                            .then(() => message.channel.send({file: './aero1Sources/ph12/calorimetrie/calorimetrie2019-Jeremie-Zakaria.pptx/'}))
                            .then(() => message.channel.send("```yaml\nAnnee 2019-2020- partager par: Lea```"))                                     //2
                            .then(() => message.channel.send({file: './aero1Sources/ph12/calorimetrie/calorimetrie2019-Lea.pptx/'}))
                            .then(() => message.channel.send("```yaml\nAnnee 2019-2020- partager par: Elena```"))                                   //3
                            .then(() => message.channel.send({file: './aero1Sources/ph12/calorimetrie/calorimetrie2018-Elena.pdf/'}))
                        message.channel.stopTyping()
                    }

                    //OPTIQUE PROJET
                    else if ((message.content).toLowerCase() === ("projet optique" || "miniprojet optique" || "mp optique" || "tp optique" || "diffraction" || "optique")) {
                        message.channel.startTyping()
                        message.reply("je t envoi ca de suite")
                        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Jeremie et Zakaria =>```")                                 //1
                            .then(() => message.channel.send({file: './aero1Sources/ph12/optique/tpOptique2020-Jeremie_Zakaria.pdf/'}))
                            .then(() => message.channel.send("```yaml\nAnnee 2019-2020- partager par: Lea =>```"))                                  //2
                            .then(() => message.channel.send({file: './aero1Sources/ph12/optique/tpOptique2020-Lea.pdf/'}))
                        message.channel.stopTyping()
                    }

                    //ELEC
                    else if ((message.content).toLowerCase() === ("miniprojet elec" || "mini projet elec" || "elec")) {
                        message.channel.startTyping()
                        message.reply("je t envoi ca de suite")
                        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Jeremie et Zakaria =>```")                                 //1
                            .then(() => message.channel.send({file: './aero1Sources/elec/MP_ELEC2020-Zakaria_Jeremie.pdf/'}))
                            .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>```"))
                            .then(() => message.channel.send({file: './aero1Sources/elec/Mini_projet_elec_Elena2018.pdf/'}))
                        //.then(() => message.channel.send("Pas assez d'archive pour l'optique, si tu souhaites partager ton tp d'optique une fois fini, tape: i!share"))                     //2
                        message.channel.stopTyping()
                    }


                })

            }
        })
    }


    //================TP GENIE MATHS

    var tpGMTrois = String(message.content).toLowerCase();
    if (tpGMTrois.indexOf("genie maths tp3" || "genie math tp3" || "tp3 newton" || "methode de newton" || "tp3 methode de newton") !== -1) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("Annee 2019- partager par: Baptiste Gautier => ")
        message.channel.send({file: './aero1Sources/GenieMaths/tp3.pdf/'})                                       //1
        message.channel.stopTyping()
    }

    //================ELEC

    var elecUn = String(message.content).toLowerCase();
    if (elecUn.indexOf("miniprojet elec" || "mini projet elec" || "mp elec") !== -1) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Jeremie et Zakaria =>```")                                 //1
            .then(() => message.channel.send({file: './aero1Sources/elec/MP_ELEC2020-Zakaria_Jeremie.pdf/'}))
            .then(() => message.channel.send("```yaml\nAnnee 2019-2020- partager par: Auriane =>```"))                    //2
            .then(() => message.channel.send({file: './aero1Sources/elec/Mini_projet_elec_Auriane.pdf/'}))
            .then(() => message.channel.send("```yaml\nAnnee 2019-2020- partager par: Bastien =>```"))                    //2
            .then(() => message.channel.send({file: './aero1Sources/elec/Mini_projet_elec_Bastien.pdf/'}))
            .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>```"))                    //2
            .then(() => message.channel.send({file: './aero1Sources/elec/Mini_projet_elec_Elena2018.pdf/'}))

        message.channel.stopTyping()
    }

    var elecDeux = String(message.content).toLowerCase();
    if (elecDeux.indexOf("tp pspice 2") !== -1) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Zakaria =>```")                                 //1
            .then(() => message.channel.send({file: './aero1Sources/tp/elec/TP2020_PSPICE_2-Zak.pdf/'}))
        message.channel.stopTyping()
    }

    //==============================

    var tp = String(message.content).toLowerCase();

    if (tp.search(/qui a fait le tp|quelqu'un aurai le tp|quelqu un aurai le tp|quelqu'un à le tp|quelqu un a le tp/i) !== -1 ) {

        message.channel.startTyping()
        message.reply("Merci de bien preciser quelle matiere (physique, genie maths ou nom du module precis etc) ou le nom du tp et je t'envoi une version complete sous format pdf")
        message.channel.stopTyping()

        const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector2)
        collector2.on('collect', message => {
            if ((message.content).toLowerCase() === "genie maths") {
                message.channel.send("c'est tout bon pour moi je t'envoi ca")
                    .then(() => message.channel.send("Annee 2019- partager par par: "))
                    .then(() => message.channel.send({file: './aero1Sources/tp/GenieMaths/tp3.pdf/'}))
                    .then(() => message.channel.send("Le projet Ipsa Share du bot I.P.S.A est encore en developpement!"))
            }
            else if ((message.content).toLowerCase() === ("elec" || "electronique")) {
                message.channel.send("Recu chef")
                    .then(() => message.channel.send("Annee 2020- (TP pspice 1) partager par par: Auriane"))
                    .then(() => message.channel.send({file: './aero1Sources/tp/elec/TP2020_PSPICE_1-Auriane.pdf/'}))
                    .then(() => message.channel.send("Annee 2020- (TP pspice 1) partager par par: Zakaria"))
                    .then(() => message.channel.send({file: './aero1Sources/tp/elec/TP2020_PSPICE_2-Zak.pdf/'}))
                    .then(() => message.channel.send("Le projet Ipsa Share du bot I.P.S.A est encore en developpement!"))
            }
        })
    }

    else if (tp.search(/qui a fait le tp d'elec|quelqu'un aurai le tp d elec|quelqu un aurai le tp d'elec|quelqu'un à le tp d'elec|quelqu un a le tp d'elec/i) !== -1) {
        message.channel.send("J'espère que c'est ce que tu voulais...")
            .then(() => message.channel.send("Annee 2020- (TP pspice 1) partager par par: Auriane"))
            .then(() => message.channel.send({file: './aero1Sources/tp/elec/TP2020_PSPICE_1-Auriane.pdf/'}))
            .then(() => message.channel.send("Annee 2020- (TP pspice 1) partager par par: Zakaria"))
            .then(() => message.channel.send({file: './aero1Sources/tp/elec/TP2020_PSPICE_2-Zak.pdf/'}))
            .then(() => message.channel.send("Le projet Ipsa Share du bot I.P.S.A est encore en developpement!"))
    }



    //========================================VERIF MAIL
    if (!mailAdded[message.author.id]) {
        mailAdded[message.author.id] = {
            mail: ""
        }
    }
    let mailUser = mailAdded[message.author.id].mail;
    if (message.channel.id === "755084204567560228") {
        let mail = message.content;
        if (mailUser == "") {

            for (const promo of Object.keys(mailVerif)) {
                if (mailVerif[promo].includes(mail)) {
                    //message.channel.send(mail);

                    let name = mail.substring(0,mail.indexOf("@"));
                    let firstName = name.substring(0,mail.indexOf("."));
                    let surName = name.substring(mail.indexOf(".")+1);
                    let correctName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
                    let correctSurname = surName.toUpperCase();
                    let fullName = correctSurname + " " + correctName

                    if (promo == "aero1") {

                        let welcomeMessage = message.channel.send(`Bonjour 🙂  ***${fullName}*** Tu appartiens a la promo *${promo}*, tu es **verifie**, ton **role** permettant d'accedes aux channels reserver a ta promo a ete **ajouter**! (mon messsage se delete tout seul merci de ne pas toucher modos!)`).then(m => m.delete(11000));
                        mailAdded[message.author.id].mail = mail
                        return mail;

                    } else if (promo == "aero2") {
                        let role = message.guild.roles.find(r => r.name === "Aéro 2");
                        let welcomeMessage = message.channel.send(`Bonjour 🙂  ***${fullName}*** Tu appartiens a la promo **${promo}**, tu es **verifie**, ton **role** permettant d'accedes aux channels reserver a ta promo a ete **ajouter**! (mon messsage se delete tout seul merci de ne pas toucher modos!)`).then(m => m.delete(11000));
                        mailAdded[message.author.id].mail = mail
                        return mail;
                    }

                } else {

                    message.reply("Il semblerait que tu te sois tromper dans l'ecriture de ton mail. Si tu penses qu'il s'agit d'une erreur provenant du bot je t'invite a mp un responsable discord ou a nous ecrire dans le channel #general ou #idee-bugs. Je m'efface tout seul, pas touche les modos :P").then(m => m.delete(6000));
                    return false;
                }

            }

        }
        else if (mailUser === mail) {
            message.reply(`Ton compte a deja ete verifier! <:drakeno:630099103220760576> `).then(m => m.delete(6000));
            return false;
        } else {
            message.reply("Tu ne peux pas prendre l'identite de quelqu'un d'autre Mr Who! Si tu penses qu'il s'agit d'une erreur provenant du bot je t'invite a mp le bot en ecrivant \"erreur\"").then(m => m.delete(6000));
            return false;
        }
        fs.writeFile("./jsonFile/mailAdded.json", JSON.stringify(mailAdded, null, 2), (err) => {
            if (err) console.log(err);
        });

    }

    //AIDE INFORMATIQUE PING ZAKARIA

    //var aideInformatique = String(message.content);
    //if (aideInformatique.indexOf("?") != -1 && ((message.channel.id === "755084205330792547" ) || message.channel.id("611832091604287518"))) {
    //  message.reply("<@239455598343618580> peux peut-être aider !")
    //}



    //=============================

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    const cmd = client.commands.get(command);

    if(!cmd) return message.reply("il semblerai que tu ai besoin de m'appeler, si tu ne connais pas les commandes je t'invite a faire i!aide");

    cmd.run(client, message, args);




}