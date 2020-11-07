const Discord = require('discord.js');
const prefix = "i!";
const fs = require("fs");
//mailVerif
let mailVerif = require("../jsonFile/mailsVerif.json")
//mailAdd
let mailAdded = require("../jsonFile/mailAdded.json")


module.exports = async(client, message) => {

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

    var mp = String(message.content).toLowerCase();

    if (mp.indexOf(/mp ph111/i || /miniprojet ph111/i || /projet ressort/i || /miniprojet ressort/i || /mp ressort/i || /mini projet resort/) !== -1 ) {

        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Zakaria =>```")                                 //1
        .then(() => message.channel.send({file: './ph11/mph11-2019Zak.pdf/'}))
        .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>``` "))                     //2
        .then(() => message.channel.send({file: './ph11/mph11-2018Elena.pdf/'}))
        .then(() => message.channel.send("```yaml\nAnnee 2017-2018- partager par: Mathieu =>``` "))                   //3
        .then(() => message.channel.send({file: './ph11/mph11-2017.pdf/'}))
        message.channel.stopTyping()

    }

    //ph121 = pendule


    if (mp.indexOf( "projet pendule" || "miniprojet pendule" || "mp pendule") !== -1 ) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>```")                                 //1
        .then(() => message.channel.send({file: './ph12/pendule/pendule2018-Elena.pdf/'}))
        .then(() => message.channel.send("```yaml\nAnnee 2012-2013 partager par: Thomas =>``` "))                     //2
        .then(() => message.channel.send({file: './ph12/pendule/pendule2012-Thomas.pdf/'}))
        message.channel.stopTyping()
    }

    //ph121 = optique


    if (mp.indexOf( "projet optique" || "miniprojet optique" || "mp optique" || "tp optique") !== -1 ) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Jeremie et Zakaria =>```")                                 //1
        .then(() => message.channel.send({file: './ph12/optique/tpOptique2020-Jeremie_Zakaria.pdf/'}))
        .then(() => message.channel.send("Pas assez d'archive pour l'optique, si tu souhaites partager ton tp d'optique une fois fini, tape: i!share"))                     //2
        message.channel.stopTyping()
    }

    //ph121 = calorimetrie

    if (mp.indexOf( "projet calorimetrie" || "miniprojet calorimetrie" || "mp calorimetrie" || "tp calorimetrie") !== -1 ) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>```")                                 //1
        .then(() => message.channel.send({file: './ph12/calorimetrie/calorimetrie2018-Elena.pdf/'}))
        .then(() => message.channel.send("Pas assez d'archive pour l'optique, si tu souhaites partager ton tp d'optique une fois fini, tape: i!share"))                     //2
        message.channel.stopTyping()
    }


    //mini projet en general

    if (mp.indexOf("mini projet" || "mini projet ipsa") !== -1 ) {

        message.channel.startTyping()
        message.reply("Merci de bien (re)preciser quelle module de matiere (ph111, ph121, elec etc) ou le nom du miniprojet et je t'envoi une version complete sous format pdf")
        message.channel.stopTyping()

        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if ((message.content).toLowerCase() == ("ph111" || "ressort" || "projet ressort")) {
                message.channel.send("c'est tout bon pour moi je t'envoi ca, cela peu prendre quelques secondes.").then(m => m.delete(4000));
                message.channel.send("```yaml\nAnnee 2019-2020- partager par: Zakaria =>```")                                   //1
                .then(() => message.channel.send({file: './ph11/mph11-2019Zak.pdf/'}))
                .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>``` "))                       //2
                .then(() => message.channel.send({file: './ph11/mph11-2018Elena.pdf/'}))
                .then(() => message.channel.send("```yaml\nAnnee 2017-2018- partager par: Mathieu =>``` "))                     //3
                .then(() => message.channel.send({file: './ph11/mph11-2017.pdf/'}))

                const eastercollector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 20000 });
                eastercollector.on('collect', message => {
                    if(message.content == "merci") {

                        message.reply("woah t es un bon toi tu dis merci a un bot, easter egg complete! +1 easterEgg, +500xp (Easteregg pas encore active)").then(m => m.delete(3000))
                    }
                })
            }

            if ((message.content).toLowerCase() == ("ph121" || "mp ph121" || "miniprojet ph121" || "mini projet ph121")) {
                message.channel.send("Il semblerait qu'il y ai beaucoup de mini projet dans le deuxieme module de physique, merci de me preciser le nom du mini projet: comete, diffraction, pendule ou calorimetrie?")
                const underCollector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 15000});
                console.log(underCollector)
                underCollector.on('collect', message => {
                    //COMETE PROJET
                    if (message.content == ("comete" || "halley" || "comete halley" || "mini projet comète de Halley" || "comète de Halley")) {
                        message.channel.send("c'est tout bon pour moi je t'envoi ca");
                        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Auriane => ```")                                  //1
                        .then(() => message.channel.send({file: './ph12/comete/comete2020-Auriane_Zakaria.pdf'}))
                        .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Baptiste => ```"))                    //2
                        .then(() => message.channel.send({file: './ph12/comete/comete2018-Baptiste.pdf/'}))
                        .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena => ```"))                       //3
                        .then(() => message.channel.send({file: './ph12/comete/comete2018-Elena.pdf/'}))
                    }

                    //PENDULE PROJET
                    else if ((message.content).toLowerCase() == "pendule") {
                        message.channel.startTyping()
                        message.reply("c'est tout bon pour moi je t'envoi ca")
                        message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>```")                                 //1
                        .then(() => message.channel.send({file: './ph12/pendule/pendule2018-Elena.pdf/'}))
                        .then(() => message.channel.send("```yaml\nAnnee 2012-2013 partager par: Thomas =>``` "))                   //2
                        .then(() => message.channel.send({file: './ph12/pendule/pendule2012-Thomas.pdf/'}))
                        message.channel.stopTyping()
                    }

                    //CALORIMETRIE PROJET
                    else if ((message.content).toLowerCase() ==  ("projet calorimetrie" || "miniprojet calorimetrie" || "mp calorimetrie" || "tp calorimetrie" || "calorimetrie") !== -1 ) {
                        message.channel.startTyping()
                        message.reply("je t envoi ca de suite")
                        message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>```")                                 //1
                        .then(() => message.channel.send({file: './ph12/calorimetrie/calorimetrie2018-Elena.pdf/'}))
                        .then(() => message.channel.send("Pas assez d'archive pour l'optique, si tu souhaites partager ton tp d'optique une fois fini, tape: i!share"))                     //2
                        message.channel.stopTyping()
                    }

                    else if ((message.content).toLowerCase() == ("projet optique" || "miniprojet optique" || "mp optique" || "tp optique" || "diffraction" || "optique") !== -1 ) {
                        message.channel.startTyping()
                        message.reply("je t envoi ca de suite")
                        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Jeremie et Zakaria =>```")                                 //1
                        .then(() => message.channel.send({file: './ph12/optique/tpOptique2020-Jeremie_Zakaria.pdf/'}))
                        .then(() => message.channel.send("Pas assez d'archive pour l'optique, si tu souhaites partager ton tp d'optique une fois fini, tape: i!share"))                     //2
                        message.channel.stopTyping()
                    }

                    //ELEC
                    else if ((message.content).toLowerCase() == ("miniprojet elec" || "mini projet elec" || "elec")) {
                        message.channel.startTyping()
                        message.reply("je t envoi ca de suite")
                        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Jeremie et Zakaria =>```")                                 //1
                        .then(() => message.channel.send({file: './elec/MP_ELEC2020-Zakaria_Jeremie.pdf/'}))
                        .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>```"))
                        .then(() => message.channel.send({file: './elec/Mini_projet_elec_Elena2018.pdf/'}))
                        .then(() => message.channel.send("Pas assez d'archive pour l'optique, si tu souhaites partager ton tp d'optique une fois fini, tape: i!share"))                     //2
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
        message.channel.send({file: './GenieMaths/tp3.pdf/'})                                       //1
        message.channel.stopTyping()
    }

    //================ELEC
    
    var elecUn = String(message.content).toLowerCase();
    if (elecUn.indexOf("miniprojet elec" || "mini projet elec" || "mp elec") != -1) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Jeremie et Zakaria =>```")                                 //1
        .then(() => message.channel.send({file: './elec/MP_ELEC2020-Zakaria_Jeremie.pdf/'}))
        .then(() => message.channel.send("```yaml\nAnnee 2018-2019- partager par: Elena =>```"))
        .then(() => message.channel.send({file: './elec/Mini_projet_elec_Elena2018.pdf/'}))
        .then(() => message.channel.send("Pas assez d'archive pour l'optique, si tu souhaites partager ton tp d'elec une fois fini, tape: i!share"))                     //2
        message.channel.stopTyping()
    }

    var elecDeux = String(message.content).toLowerCase();
    if (elecDeux.indexOf("tp pspice 2") != -1) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("```yaml\nAnnee 2019-2020- partager par: Zakaria =>```")                                 //1
        .then(() => message.channel.send({file: './elec/TP2020_PSPICE_2-Zak.pdf/'}))
        .then(() => message.channel.send("Pas assez d'archive pour l'optique, si tu souhaites partager ton tp d'elec une fois fini, tape: i!share"))                     //2
        message.channel.stopTyping()
    }
    
    //==============================

    var tp = String(message.content).toLowerCase();
   
    if (tp.indexOf("qui a fait le tp" || "quelqu'un aurai le tp" || "quelqu un aurai le tp") !== -1 ) {

        message.channel.startTyping()
        message.reply("Merci de bien preciser quelle matiere (physique, genie maths ou nom du module precis etc) ou le nom du tp et je t'envoi une version complete sous format pdf")
        message.channel.stopTyping()

        const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector2)
        collector2.on('collect', message => {
            if (message.content == "genie maths") {
                message.channel.send("c'est tout bon pour moi je t'envoi ca");
                message.channel.send("Annee 2019- partager par par: ")
                message.channel.send({file: './GenieMaths/tp3.pdf/'})
                message.channel.send("Le projet Ipsa Share du bot I.P.S.A est encore en developpement!")
            }
        })
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
        else if (mailUser == mail) {
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
