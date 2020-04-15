const Discord = require('discord.js');
const prefix = "i!";
const fs = require("fs");


module.exports = async(client, message) => {

    //=============
    if(message.author.bot) return;

    //fonction special
    var chaine = String(message.content);

    if (chaine.indexOf("dropbox") !== -1) {
        message.reply('Go ici amigo=> <#611829345446658048>' );
    }

    var catia = String(message.content);

    if (catia.indexOf("catia") !== -1) {
        message.reply('Check ce channel, ca pourrai repondre a ta question padaone => <#611829345446658048>' );
    }


    var chaine2 = String(message.content);

    if (chaine2.indexOf("chut") !== -1) {
        message.channel.send('ce manque de respect popopopo j\'aurai pas aimer');
    }

    var chaine3 = String(message.content);

    if (chaine3.indexOf("bonsoir") !== -1) {
        message.channel.send('salut mon ami ;)');
    }

    var chaine4 = String(message.content);

    if (chaine4.indexOf("t'as fait") !== -1) {
        message.channel.send('nop pas encore deso');
    }

    var chaine5 = String(message.content);

    if (chaine5.indexOf("???") !== -1) {
        message.channel.send('ceci etait une question que qql y reponde please (*ouai tu peux m\'appeler Dieu gamin*)');
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
  
    //ph111
    var mph11 = String(message.content);
    if (mph11.indexOf("mp ph111" || "miniprojet ph111" || "mini projet ph111" || "projet ressort" || "miniprojet ressort" || "mp ressort") !== -1 ) {
 
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("Annee 2019- realise par: Zakaria Chaouki")
        message.channel.send({file: './ph11/mph11-2019.pdf/'})
        message.channel.send("Annee 2017-2018- partager par: Le Voileux ")
        message.channel.send({file: './ph11/mph11-2017.pdf/'})
        message.channel.stopTyping()
 
    }

    //ph121
 
   
    var mp = String(message.content);
   
        if (mp.indexOf("mini projet" || "mini projet ipsa") !== -1 ) {
 
          message.channel.startTyping()
          message.reply("Merci de bien preciser quelle matiere/ module (ph111, ph121 etc) ou le nom du miniprojet et je t'envoi une version complete sous format pdf")
          message.channel.stopTyping()
 
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
            console.log(collector)
            collector.on('collect', message => {
                if (message.content == "ph111") {
                    message.channel.send("c'est tout bon pour moi je t'envoi ca");
                    message.channel.send("Annee 2019-2020- partager par: Zakaria, The karma")
                    message.channel.send({file: './ph11/mph11-2019.pdf/'})
                    message.channel.send("Annee 2017-2018- partager par: Le Voileux ")
                    message.channel.send({file: './ph11/mph11-2017.pdf/'})
                }
 
                if (message.content == "ph121") {
                 message.channel.send("c'est tout bon pour moi je t'envoi ca");
                 message.channel.send("Annee 2019- partager par: Baptiste Gautier")
                 message.channel.send({file: './ph12/mpPh121.pdf/'})
                }
            })
        }

    //================TP GENIE MATHS

    var tp3GM = String(message.content);
    if (tp3GM.indexOf("genie maths tp3 || genie math tp3 || tp3 newton || methode de newton || tp3 methode de newton") !== -1) {
        message.channel.startTyping()
        message.reply("je t envoi ca de suite")
        message.channel.send("Annee 2019- partager par: Baptiste Gautier ")
        message.channel.send({file: './GenieMaths/tp3.pdf/'})
        message.channel.stopTyping()
    }


    //==============================

    var tp = String(message.content);
   
        if (mp.indexOf("tp") !== -1 ) {
 
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


    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    const cmd = client.commands.get(command);

    if(!cmd) return message.reply("il semblerai que tu ai besoin de m'appeler, si tu ne connais pas les commandes je t'invite a faire i!aide");

    cmd.run(client, message, args);
    
    


}
