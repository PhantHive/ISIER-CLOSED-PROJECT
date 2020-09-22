const Discord = require("discord.js");
//let infoLVL = require("../jsonFile/level.json");
const client = new Discord.Client();
client.mongoose = require('../utils/mongose.js');
const XLD = require('../models/RankSystem.js');
const { createCanvas, loadImage } = require("canvas");
const { Attachment } = require("discord.js");
const { join } = require("path");

module.exports.run = async (client, message,args) => {

  /*
  if(!infoLVL[message.author.id]) {
    infoLVL[message.author.id] = {
      xp: 0,
      lvl: 1
    };
  } */


  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;


  //mongoDB
  XLD.findOne({

    ID: member.id + "-" + message.guild.id

  }, 
  async (err, data) =>  {
      if (err) console.log(err);
      if(!data) {

          message.reply("pas de rang!")
          const newD = new XLD({
              ID: member.id + "-" + message.guild.id,
              XP: 0,
              LEVEL: 1
          });
          newD.save();
    }
    else { 
       
        let curxp = data.XP;
        let curlvl = data.LEVEL;
        let newlvl = 5 * (curlvl** 2) + 69 * curlvl + 249;

        const canvas = createCanvas(1000, 333);
        const ctx = canvas.getContext('2d');
        const background = await loadImage(join(__dirname, "..", "image", "mariobackground.jpg"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#ffffff";
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = "#000000";
        ctx.fillRect(180, 216, 770, 65);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeRect(180, 216, 770, 65);
        ctx.stroke();

        var percentage = (curxp / newlvl) * 766;

        var percentage = newlvl / curlvl;
        var gradient = ctx.createLinearGradient(0, 0, 200, 0);
        gradient.addColorStop(0, "#ffffff");
        gradient.addColorStop(1, "#007AFF")

        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.8;
        ctx.fillRect(180, 218, percentage, 61);
        ctx.globalAlpha = 1; 

        ctx.font = "35px bold Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`${curxp}  /  ${newlvl} XP`, 600, 260);
        ctx.textAlign = "left";
        ctx.fillText(member.user.tag, 300, 120);

        ctx.font = "45px Arial";
        ctx.fillText("Level:", 300, 180);
        ctx.fillText(curlvl, 470, 180);

        ctx.arc(170, 160, 120, 0, Math.PI * 2, true);
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
        ctx.closePath();
        ctx.clip();
        const avatar = await loadImage(member.user.displayAvatarURL);
        ctx.drawImage(avatar, 40, 40, 250, 250);

        message.channel.send({
          files: [{
            attachment: canvas.toBuffer(),
            name: "rang.png"
          }]
        });
    }

        /*
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
         */
  
  });

  
};





module.exports.help = {
  name: "rang"
};
