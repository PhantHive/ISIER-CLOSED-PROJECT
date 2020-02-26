const Discord = require('discord.js');
const prefix = "i!";
const fs = require("fs");
let easterEgg = require("./easterEgg.json");
let infoLVL = require("../jsonFile/level.json");

module.exports = async(client, message) => {
    
    if(!infoLVL[message.author.id]) {
      infoLVL[message.author.id] = {
        xp: 0,
        lvl: 1
      };
    }

    let curxp = infoLVL[message.author.id].xp;
       
    //Easter egg system counter
    
    if (!easterEgg[message.author.id]) {
      easterEgg[message.author.id] = {
            counter: 0
        }
    }
    
    


    //=============
    
    
    if (message.author.bot) return;

    //fonction special 
    var chaine = String(message.content);

    if (chaine.indexOf("dropbox") !== -1) {
        message.reply('Go ici amigo=> <#611829345446658048>' );
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
        message.reply('je te promet c est vrai tavu');
    }

    var chaine7 = String(message.content);

    if (chaine7.indexOf("mdr") !== -1) {
        message.react('😂');
    }
    //=================


    
    //==============================

    let curCounter = easterEgg[message.author.id].counter;
  
    
    if (message.channel.type === "dm") {
    
        if(message.content === "je t'aime") {
        
            if (curCounter == 0) {
            
                message.reply("***Tu es mon premier amour!***");
                curCounter += 1;
                curxp = curxp + 500;
            } fs.writeFile("./easterEgg.json", JSON.stringify(easterEgg), (err) => {
              if (err) console.log(err);
              });
            
            
                
      } else {

        message.reply("Utilises le channel discord commandes bot pour pouvoir m'utiliser")

      }
    }


    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    const cmd = client.commands.get(command);

    if(!cmd) return message.reply("il semblerai que tu ai besoin de m'appeler, si tu ne connais pas les commandes je t'invite a faire i!aide");

    cmd.run(client, message, args);



}
