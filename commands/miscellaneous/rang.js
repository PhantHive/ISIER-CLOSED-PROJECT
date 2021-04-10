const Discord = require("discord.js");
//let infoLVL = require("../jsonFile/level.json");
const client = new Discord.Client();
client.mongoose = require('../../utils/mongose.js');
const XLD = require('../../models/RankSystem.js');
const EGD = require('../../models/EasterSystem.js');
const { createCanvas, loadImage } = require("canvas");
const { MessageAttachment} = require("discord.js");
const { join } = require("path");

module.exports =  {
    name:"rang",
    aliases: ["rank", "niveau", "level"],
    category:"miscellaneous",
    description:"send rank info",
    timeout: 10000,
    usage:"rang",
    run: async(client, message, args) => {

        /*
        if(!infoLVL[message.author.id]) {
          infoLVL[message.author.id] = {
            xp: 0,
            lvl: 1
          };
        } */

        const allR = await XLD.countDocuments({}).exec();
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


        //mongoDB
        XLD.findOne({

                ID: member.id + "-" + message.guild.id

            },
            async (err, data) => {
                if (err) console.log(err);
                if (!data) {

                    message.reply("pas de rang!")
                    const newD = new XLD({
                        ID: member.id + "-" + message.guild.id,
                        serverID: message.guild.id,
                        XP: 0,
                        LEVEL: 1,
                        RANK: 0
                    });
                    newD.save();
                } else {

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

                    EGD.findOne({
                            ID: member.id
                        },
                        async (err, data2) => {
                            if (err) console.log(err);
                            if (!data2) {
                                const newE = new EGD({
                                    ID: member.id,
                                    thanksEaster: 0,
                                    loveEaster: 0

                                });
                                newE.save();
                                message.reply("Merci de refaire la commande, j'ai mis à jour ma base de donnée avec les easter eggs.").then(m => m.delete(3000))
                            } else {
                                let curRank = data.RANK;
                                let curxp = data.XP;
                                let curlvl = data.LEVEL;
                                let curEgg = data2.thanksEaster + data2.loveEaster;
                                let newlvl = 25 * (curlvl ** 2) + 169 * curlvl + 845;


                                if (data.LEVEL < 5) {
                                    color = "#000000";
                                    colorBar = "#bf01bf"
                                    shadowColor = 'blue'
                                } else if (data.LEVEL < 10) {
                                    color = "#000000";
                                    shadowColor = "black"
                                    colorBar = "#bf01bf"
                                } else {
                                    color = "#000000";
                                    shadowColor = "black"
                                    colorBar = "#bf01bf"
                                }

                                const canvas = createCanvas(400, 200);
                                const ctx = canvas.getContext('2d');
                                ctx.save();
                                ctx.beginPath();
                                ctx.strokeStyle = "#ffffff";
                                ctx.lineWidth = 2;
                                ctx.moveTo(82, 5);
                                ctx.arcTo(395, 5, 395, 195, 10);
                                ctx.arcTo(395, 195, 75, 195, 10);
                                ctx.arcTo(75, 195, 75, 5, 10);
                                ctx.arcTo(75, 5, 395, 5, 10);
                                ctx.stroke();
                                ctx.clip();
                                const background = await loadImage(join(__dirname, "../..", "ressources/image", "background.jpg"));
                                ctx.drawImage(background, 70, 0, canvas.width, canvas.height);
                                ctx.closePath();

                                /*ctx.beginPath();
                                ctx.strokeStyle = "#000000";
                                ctx.globalAlpha = 0.2;
                                ctx.fillStyle = "#000000";
                                ctx.lineWidth = 2;
                                ctx.moveTo(200, 100)
                                ctx.quadraticCurveTo(190, 110, 200, 120) //left arc (pi/2 : - pi/2)
                                ctx.lineTo(300, 120)
                                ctx.quadraticCurveTo(300, 110, 300, 100) //right arc (-pi/2 : pi/2)
                                ctx.lineTo(200, 100)
                                ctx.stroke();
                                ctx.fill();
                                ctx.globalAlpha = 1;*/


                                var percentage = (curxp / newlvl) * 100;
                                var gradient = ctx.createLinearGradient(200, 100, 300, 120);
                                gradient.addColorStop(0, "#ff00dd");
                                gradient.addColorStop(1, colorBar)

                                //bar rempli
                                ctx.beginPath();
                                ctx.fillStyle = gradient;
                                ctx.globalAlpha = 0.7;
                                ctx.arc(200, 110, 10, 0.5 * Math.PI, 1.5 * Math.PI, false);
                                ctx.fillRect(200, 100, percentage, 20);
                                ctx.arc(200 + percentage, 110, 10, 0.5 * Math.PI, 1.5 * Math.PI, true);
                                ctx.fill();


                                ctx.globalAlpha = 1;
                                ctx.font = "35px Arial";
                                ctx.textAlign = "center";
                                ctx.fillStyle = "#ffffff";
                                ctx.fillText(`${curxp}  /  ${newlvl} XP`, 600, 280);
                                ctx.textAlign = "left";


                                ctx.font = "bold 20px Comic Sans MS";
                                ctx.fillStyle = color;
                                ctx.shadowOffsetX = 5;
                                ctx.shadowColor = shadowColor;
                                ctx.shadowBlur = 3;
                                ctx.fillText(member.user.tag, 150, 70);

                                ctx.shadowOffsetX = 5;
                                ctx.shadowColor = "blue";
                                ctx.shadowBlur = 3;
                                ctx.fillStyle = "#ffffff";
                                ctx.font = "40px Comic Sans MS";
                                ctx.fillText("Level:", 300, 215);
                                ctx.fillText(curlvl, 470, 215);

                                ctx.font = "bold italic 30px Arial";
                                ctx.fillStyle = "#ffffff";
                                ctx.fillText("Formule: 25 * (curlvl ** 2) + 169 * curlvl + 845", 50, 350)

                                const rankImg = await loadImage(join(__dirname, "../..", "ressources/image", "rank.png"));
                                ctx.drawImage(rankImg, 550, 15, 50, 50);
                                ctx.shadowOffsetY = 4;
                                ctx.shadowColor = "black";
                                ctx.shadowBlur = 6;
                                ctx.font = "bold 45px Comic Sans MS";
                                ctx.fillStyle = "#FEE700";
                                ctx.fillText("RANG:", 610, 60);
                                ctx.fillText(curRank + "/" + allR, 830, 60);

                                const eggImg = await loadImage(join(__dirname, "../..", "ressources/image", "egg.png"));
                                ctx.drawImage(eggImg, 760, 80, 40, 40);
                                ctx.shadowOffsetY = 4;
                                ctx.shadowColor = "black";
                                ctx.shadowBlur = 6;
                                ctx.font = "bold 35px Comic Sans MS";
                                ctx.fillStyle = "#00f1fe";
                                ctx.fillText("EGG:", 800, 110);
                                ctx.fillText(curEgg + "/" + 2, 900, 110);

                                ctx.restore();
                                //profil circle
                                ctx.moveTo(85 + 65 * Math.cos(0), 100 + 65 * Math.sin(0));

                                for (let side = 0; side < 7; side++) {
                                    ctx.lineTo(85 + 65 * Math.cos(side * 2 * Math.PI / 6), 102 + 65 * Math.sin(side * 2 * Math.PI / 6));
                                }

                                ctx.lineWidth = 7;
                                ctx.strokeStyle = "#ffffff";
                                ctx.stroke();
                                ctx.closePath();
                                ctx.clip();
                                const avatar = await loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
                                ctx.drawImage(avatar, 20, 40, 130, 130);


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

                                const attachment = new MessageAttachment(canvas.toBuffer(), "rang.png")
                                await message.channel.send(attachment);
                            }

                        });
                }
            });

    }

}


