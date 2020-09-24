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
              serverID: message.guild.id,
              XP: 0,
              LEVEL: 1,
              RANK: 0
          });
          newD.save();
    }
    else { 
       
        /*
        var leaderboard = XLD.find({LEVEL: {$exists: true}, XP: {$exists: true}}).sort({LEVEL: -1, XP: -1});
        var count = leaderboard.count();
        var i = 1;
        while(count.hasNext()) {
          var position = i;
          var user = leaderboard.count();
          user.update(
            {"ID": member.id + "-" + message.guild.id},
            {"$set": {"POSITION": position}}
          );
          i ++;
        }

         
        */
       
        let curRank = data.RANK;
        let curxp = data.XP;
        let curlvl = data.LEVEL;
        let newlvl = 25 * (curlvl** 2) + 169 * curlvl + 845;

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

        var percentage = (curxp / newlvl) * 767;
        var gradient = ctx.createLinearGradient(0, 0, 200, 0);
        gradient.addColorStop(0, "#ffffff");
        gradient.addColorStop(1, "#007AFF")

        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.8;
        ctx.fillRect(180, 218, percentage, 61);
        ctx.globalAlpha = 1; 
        ctx.font = "35px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`${curxp}  /  ${newlvl} XP`, 600, 260);
        ctx.textAlign = "left";

        ctx.font = "bold 45px Comic Sans MS";
        ctx.shadowOffsetX = 5;
        ctx.shadowColor = "blue";
        ctx.shadowBlur = 3;
        ctx.fillText(member.user.tag, 300, 120);
  
        ctx.font = "40px Comic Sans MS";
        ctx.fillText("Level:", 300, 180);
        ctx.fillText(curlvl, 470, 180);

        ctx.font = "bold italic 25px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.fillText("Formule: 25 * (curlvl ** 2) + 169 * curlvl + 845", 50, 320)
        

        ctx.shadowOffsetY = 3;
        ctx.shadowColor = "black";
        ctx.shadowBlur = 6;
        ctx.font = "bold 45px Comic Sans MS";
        ctx.fillStyle = "#FEE700";
        ctx.fillText("✪RANG:", 720, 60);
        ctx.fillText(curRank, 930, 60);


        
        //profil circle
      
        ctx.arc(170, 160, 120, 0, Math.PI * 2, true);
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
        ctx.closePath();
        ctx.clip();
        const avatar = await loadImage(member.user.displayAvatarURL);
        ctx.drawImage(avatar, 40, 40, 250, 250);

        /*
    
        ctx.shadowOffsetX = 0;
        ctx.shadowBlur = 0;
        //small circle rank
        ctx.arc(250, 80, 15, 0, Math.PI * 2, true);
        ctx.fillStyle = '#000000';
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.clip();
        */

  

        
        
        

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
