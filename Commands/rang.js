const Discord = require("discord.js");
let infoLVL = require("../jsonFile/level.json");

module.exports.run = async (client, message,args) => {

  if(!infoLVL[message.author.id]) {
    infoLVL[message.author.id] = {
      xp: 0,
      lvl: 1const Discord = require("discord.js");
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
  let newlvl = 5 * (curlvl** 2) + 69 * curlvl + 249;

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





module.exports.help = {
  name: "rang"
};
