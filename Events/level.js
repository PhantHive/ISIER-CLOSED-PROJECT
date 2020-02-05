const discord = require("discord.js");

module.exports = async(client, message) => {

  let xpAdd = Math.floor(Math.random()*7) + 1;

  if(!infoLvl[message.author.id]) { //si l'utilisateur n'a pas de profil niveau, on lui etablit un
    infoLvl[message.author.id] = {

        xp: 0
        lvl: 1

    };
  }


  #=================
  let curxp = infoLvl[message.author.id].xp; #servira pour afficher les xp

  let curLvl = infoLvl[message.author.id].lvl; #servira pour afficher les levels

  # ===============

  i = 1

  for i in 50 {

    let nxtLvl = infoLvl[message.author.id].lvl * 500 ; //on definit le premier level a gagner a 500xp (on passe niveau i + 1)


    if (nxtLvl === infoLvl[message.author.id].xp && curLvl < 10) {

      infoLvl[message.author.id].lvl = curLvl + 1;

      let lvlup = new Discord.RichEmbed()
            .setTitle("LVL +")
            .setColor("GREEN")
            .addField(message.author.username + " niveau atteint: ", curlvl + 1, true)
            .addField("XP: ", curxp)
            .setImage("https://i.imgur.com/FFYT8Ll.png");
        message.guild.channels.get('502932200975630336').send(lvlup);


    } else if (nxtLvl === infoLvl[message.author.id].xp && curLvl < 25) {

      infoLvl[message.author.id].lvl = curLvl + 1;

      let lvlup2 = new Discord.RichEmbed()
            .setTitle("LVL ++")
            .setColor("BLUE")
            .addField(message.author.username + " TU ES BON, niveau atteint: ", curlvl + 1, true)
            .addField("XP: ", curxp)
            .setImage("https://i.imgur.com/7LVMSKN.png");
        message.guild.channels.get('502932200975630336').send(lvlup2);//622155677338566656

    } else if (nxtLvl === infoLvl[message.author.id].xp && curLvl < 50) {

      infoLvl[message.author.id].lvl = curLvl + 1;

      let lvlup3 = new Discord.RichEmbed()
            .setTitle("LVL +++++")
            .setColor("ORANGE")
            .addField(message.author.username + " is GOD LIKE, niveau atteint: ", curlvl + 1, true)
            .addField("XP: ", curxp)
            .setImage("https://i.imgur.com/Mnx9Vu0.jpg");
        message.guild.channels.get('502932200975630336').send(lvlup3)

    } else if (nxtLvl === infoLvl[message.author.id].xp && curLvl === 50) {

      message.channels.get('502932200975630336').send("WTF MEN TU ES CHAUD!")

    }
    fs.writeFile("./json/infolvl.json", JSON.stringify(xp), (err) => {
        if (err) console.log(err)
    });


    nxtLvl = nxtLvl*i; // puis on multiplie par le niveau i pour augmenter le niveau d xp a avoir proportionnelement

    i += 1;

  }


}
