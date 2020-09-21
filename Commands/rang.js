const Discord = require("discord.js");
//let infoLVL = require("../jsonFile/level.json");
const client = new Discord.Client();
client.mongoose = require('../utils/mongose.js');
const XLD = require('../models/RankSystem.js');

module.exports.run = async (client, message,args) => {

  /*
  if(!infoLVL[message.author.id]) {
    infoLVL[message.author.id] = {
      xp: 0,
      lvl: 1
    };
  } */

  //mongoDB
  XLD.findOne({

    ID: message.author.id + "-" + message.guild.id

  }, 
  (err, data) => {
      if (err) console.log(err);
      if(!data) {
          const newD = new XLD({
              ID: message.author.id + "-" + message.guild.id,
              XP: 0,
              LEVEL: 1
          });
          newD.save();
    } else {
        let curxp = data.XP;
        let curlvl = data.LEVEL;
        let newlvl = 5 * (curlvl** 2) + 69 * curlvl + 249;

        /*
        let curxp = infoLVL[message.author.id].xp;
        let curlvl = infoLVL[message.author.id].lvl;
        let newlvl = 5 * (curlvl** 2) + 69 * curlvl + 249;
        */
        let rang = new Discord.RichEmbed() 
          .setAuthor(message.author.username)
          .setColor("black")
          .addField("XP: ", curxp, true)
          .addField("LEVEL: ", curlvl, true)
          .addField("PROGRESSION: ", `${curxp}  /  ${newlvl}`, true )
          .addField("======================", "<systemXP>")
          .setFooter(", base sur la formule:  5 * (votreniveau ^ 2) + 69 * votreniveau + 249")

        message.channel.send(rang);
    };
  });

  
};





module.exports.help = {
  name: "rang"
};
