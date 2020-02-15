const Discord = require("discord.js");

let infoLVL = require("../jsonFile/xp.json");


module.exports.run = async(client, message, args) => {

  if(!infoLVL[message.author.id]) { //si l'utilisateur n'a pas de profil niveau, on lui etablit un
    infoLVL[message.author.id] = {
        xp: 0,
        lvl: 1
    };
  }

  let curxp = infoLVL[message.author.id].xp; //servira pour afficher les xp

  let curLvl = infoLVL[message.author.id].lvl; //servira pour afficher les levels

  let nxtLvl = infoLVL[message.author.id].level * 2500;




const lvl_embed = new Discord.RichEmbed()
    .setColor('#DB13C2')
    .addField(message.author.name + ",\n Level actuel: ", curLvl, true)
    .addField(" avec: ", curxp + " experience \n===ApoCsXpSystem===", false)
    .setThumbnail(message.author.avatarURL);
message.channel.send(lvl_embed)

};


module.exports.help = {
    name: "rang"
};
