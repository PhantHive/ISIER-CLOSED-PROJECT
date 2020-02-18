const Discord = require("discord.js");
let infoLVL = require("../jsonFile/level.json");

module.exports.run = async (client, message,args) => {

  if(!infoLVL[message.author.id]) {
    infoLVL[message.author.id] = {
      xp: 0,
      lvl: 1
    };
  }

  let curxp = infoLVL[message.author.id].xp;
  let curlvl = infoLVL[message.author.id].lvl;

  let rang = new Discord.RichEmbed()
    .setAuthor(message.author.username
    .setColor("black"))
    .addField("XP: ", curxp, true)
    .addField("LEVEL: ", curlvl, true)

  message.channel.send(rang);
};





module.exports.help = {
  name: "rang"
};
