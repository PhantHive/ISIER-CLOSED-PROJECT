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

     let b;
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
        b = Math.floor((Math.random() * 20) + 1);
        if (b === 5) {
            message.channel.send('ce manque de respect popopopo j\'aurai pas aimer');
        }

    }

    var chaine3 = String(message.content);

    if (chaine3.indexOf("bonsoir") !== -1) {
        b = Math.floor((Math.random() * 15) + 1);
        if (b === 5) {
            message.channel.send('salut mon ami ;)');
        }

    }

    var chaine4 = String(message.content);

    if (chaine4.indexOf("t'as fait") !== -1) {
        b = Math.floor((Math.random() * 20) + 1);
        if (b == 5) {
            message.channel.send('nop pas encore deso');
        }
    }

    var chaine5 = String(message.content);

    if (chaine5.indexOf("???") !== -1) {
        b = Math.floor((Math.random() * 25) + 1);
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
        b = Math.floor((Math.random() * 15) + 1);
        if (b === 5) {
            message.react('😂');
        } else if (b === 10) {
            message.react('🇲')
                .then(() => message.react('🇩'))
                .then(() => message.react('🇷'))
                .catch(() => console.error("erreur dans la reaction en chaine"));
        }
    }



    /*
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

                                        await guilds.forEach(serv => {

                                            new Promise(resolve => setTimeout(resolve, 5000))

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

                                                    if ((promo === "aero4InterStudents") && (serv === '880491243807846450')) {
                                                        let interRole = guild.roles.cache.find(r => r.name.includes("International"));
                                                        guild.members.cache.get(user).roles.add(interRole);
                                                    }

                                                    message.channel.send(`***${fullName}*** Tu appartiens à la promo ***${promo}***, tu es **verifié** sur ***${guild}*** en accord avec notre base de donnée.`);
                                                    mdata.ipsaMail = mail.toLowerCase();

                                                    try {
                                                        guild.members.cache.get(user).roles.add(role);
                                                    }
                                                    catch (error) {

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

                                                return mail;

                                            } catch (error) {
                                            }

                                        });

                                        mdata.save();

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
    } */

    if (message.channel.type === 'dm') {

        if (message.content.toLowerCase().indexOf("iris") !== -1) {
            message.reply("Iris est la meilleure association !")
        }

        /*
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
        }*/

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
