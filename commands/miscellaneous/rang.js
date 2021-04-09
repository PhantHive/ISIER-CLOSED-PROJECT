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
                                    color = "#ffffff";
                                    colorBar = "#60676d"
                                    shadowColor = 'blue'
                                } else if (data.LEVEL < 10) {
                                    color = "#ffffff";
                                    shadowColor = "black"
                                    colorBar = "#009bf5"
                                } else {
                                    color = "#ffffff";
                                    shadowColor = "black"
                                    colorBar = "#00c4f5"
                                }

                                const canvas = createCanvas(400, 200);
                                const ctx = canvas.getContext('2d');
                                ctx.beginPath();
                                ctx.strokeStyle = "#ffffff";
                                ctx.lineWidth = 5;
                                ctx.moveTo(70, 0);
                                ctx.arcTo(400, 0, 400, 200, 10);
                                ctx.arcTo(400, 200, 70, 200, 10);
                                ctx.arcTo(70, 200, 70, 0, 10);
                                ctx.arcTo(70, 0, 400, 0, 10);
                                ctx.stroke();
                                ctx.closePath();

                                const background = await loadImage(join(__dirname, "../..", "ressources/image", "background.jpg"));
                                ctx.beginPath();
                                ctx.drawImage(background, 70, 0, canvas.width, canvas.height);
                                ctx.closePath();

                                ctx.beginPath();
                                ctx.lineWidth = 4;
                                ctx.strokeStyle = "#ffffff";
                                ctx.globalAlpha = 0.2;
                                ctx.fillStyle = "#000000";
                                ctx.fillRect(180, 236, 770, 65);
                                ctx.fill();
                                ctx.globalAlpha = 1;
                                ctx.strokeRect(180, 236, 770, 65);
                                ctx.stroke();

                                var percentage = (curxp / newlvl) * 767;
                                var gradient = ctx.createLinearGradient(0, 0, 200, 0);
                                gradient.addColorStop(0, "#ffffff");
                                gradient.addColorStop(1, colorBar)

                                //bar rempli
                                ctx.fillStyle = gradient;
                                ctx.globalAlpha = 0.8;
                                ctx.fillRect(180, 238, percentage, 10)
                                ctx.globalAlpha = 1;
                                ctx.font = "35px Arial";
                                ctx.textAlign = "center";
                                ctx.fillStyle = "#ffffff";
                                ctx.fillText(`${curxp}  /  ${newlvl} XP`, 600, 280);
                                ctx.textAlign = "left";


                                ctx.font = "bold 15px Comic Sans MS";
                                ctx.fillStyle = color;
                                ctx.shadowOffsetX = 5;
                                ctx.shadowColor = shadowColor;
                                ctx.shadowBlur = 3;
                                ctx.fillText(member.user.tag, 250, 40);

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


                                //profil circle


                                ctx.moveTo(85 + 65 * Math.cos(0), 100 + 65 * Math.sin(0));

                                for (let side = 0; side < 7; side++) {
                                    ctx.lineTo(85 + 65 * Math.cos(side * 2 * Math.PI / 6), 100 + 65 * Math.sin(side * 2 * Math.PI / 6));
                                }

                                ctx.lineWidth = 5;
                                ctx.strokeStyle = "#ffffff";
                                ctx.stroke();
                                ctx.closePath();
                                ctx.clip();
                                const avatar = await loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
                                ctx.drawImage(avatar, 20, 40, 125, 125);

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


