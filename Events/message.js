const Discord = require('discord.js');
const prefix = "i!";
const fs = require("fs")


module.exports = async(client, message) => {

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


<<<<<<< HEAD

=======

>>>>>>> 034eea0ce92d623df1fac593eda2d758a22d1b6d
    //==============================



    if (message.channel.type === "dm") {

      if(message.content === "je t'aime") {

        message.reply("***Tu es mon premier amour!***")

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



  //xp system



/*
  const infoLvl = require('../jsonFile/xp.json');

  let xpAdd = Math.floor(Math.random()*7) + 1;

  if(!infoLvl[message.author.id]) { //si l'utilisateur n'a pas de profil niveau, on lui etablit un
    infoLvl[message.author.id] = {

        xp: 0,
        lvl: 1

    };
  }


  //=================
  var curxp = infoLvl[message.author.id].xp; //servira pour afficher les xp

  var curLvl = infoLvl[message.author.id].lvl; //servira pour afficher les levels

  infoLvl[message.author.id].xp = curxp + xpAdd;

  // ===============



    let nxtLvl = infoLvl[message.author.id].lvl * 500 ; //on definit le premier level a gagner a 500xp (on passe niveau i + 1)


    if (nxtLvl <= infoLvl[message.author.id].xp && curLvl < 10) {

      infoLvl[message.author.id].lvl = curLvl + 1;

      let lvlup = new Discord.RichEmbed()
            .setTitle("LVL +")
            .setColor("GREEN")
            .addField(message.author.username + " niveau atteint: ", curLvl + 1, true)
            .addField("XP: ", curxp)
            .setImage("https://i.imgur.com/FFYT8Ll.png");
        message.guild.channels.get('502932200975630336').send(lvlup);


    } else if (nxtLvl <= infoLvl[message.author.id].xp && curLvl < 25) {

      infoLvl[message.author.id].lvl = curLvl + 1;

      let lvlup2 = new Discord.RichEmbed()
            .setTitle("LVL ++")
            .setColor("BLUE")
            .addField(message.author.username + " TU ES BON, niveau atteint: ", curLvl + 1, true)
            .addField("XP: ", curxp)
            .setImage("https://i.imgur.com/7LVMSKN.png");
        message.guild.channels.get('502932200975630336').send(lvlup2);//622155677338566656

    } else if (nxtLvl <= infoLvl[message.author.id].xp && curLvl < 50) {

      infoLvl[message.author.id].lvl = curLvl + 1;

      let lvlup3 = new Discord.RichEmbed()
            .setTitle("LVL +++++")
            .setColor("ORANGE")
            .addField(message.author.username + " is GOD LIKE, niveau atteint: ", curLvl + 1, true)
            .addField("XP: ", curxp)
            .setImage("https://i.imgur.com/Mnx9Vu0.jpg");
        message.guild.channels.get('502932200975630336').send(lvlup3)

    } else if (nxtLvl === infoLvl[message.author.id].xp && curLvl === 50) {

      message.channels.get('502932200975630336').send("WTF MEN TU ES CHAUD!")

    }
    fs.writeFile("./json/infolvl.json", JSON.stringify(infoLvl), (err) => {
        if (err) console.log(err)
    });

*/
  // puis on multiplie par le niveau i pour augmenter le niveau d xp a avoir proportionnelement



}
