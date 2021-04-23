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
        const memberTag = member.user.tag.split("#")[1]
        const memberNick = member.user.tag.split("#")[0]

        function changeFont(ctx, nickname) {
            // Declare a base size of the font
            let fontSize = 35;

            do {
                // Assign the font to the context and decrement it so it can be measured again
                ctx.font = `bold ${fontSize -= 2}px Tahoma`;
                // Compare pixel width of the text to the canvas minus the approximate avatar size
            } while (ctx.measureText(nickname).width > 100);

            // Return the result to use in the actual canvas
            return ctx.font;
        }
        
        function colorHex(tag) {
            return `#${parseInt(tag, 16)}`
        }
        

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
                                    colorBar = "#940094"
                                    shadowColor = "black"
                                } else if (data.LEVEL < 10) {
                                    color = "#000000";
                                    shadowColor = "black"
                                    colorBar = "#940094"
                                } else {
                                    color = "#000000";
                                    shadowColor = "black"
                                    colorBar = "#940094"
                                }

                                const canvas = createCanvas(400, 200);
                                const ctx = canvas.getContext('2d');
                                ctx.save();
                                ctx.beginPath();
                                ctx.strokeStyle = "#940094";
                                ctx.lineWidth = 3;
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

                                ctx.beginPath();
                                ctx.strokeStyle = "#000000";
                                ctx.globalAlpha = 0.2;
                                ctx.fillStyle = "#000000";
                                ctx.lineWidth = 2;
                                ctx.moveTo(75, 160)
                                ctx.quadraticCurveTo(65, 170, 75, 180) //left arc (pi/2 : - pi/2)
                                ctx.lineTo(330, 180)
                                ctx.quadraticCurveTo(340, 170, 330, 160) //right arc (-pi/2 : pi/2)
                                ctx.lineTo(75, 160)
                                ctx.stroke();
                                ctx.fill();
                                ctx.globalAlpha = 1;


                                var percentage = (curxp / newlvl) * 250;
                                var gradient = ctx.createLinearGradient(200, 100, 300, 120);
                                gradient.addColorStop(0, "#fd12de");
                                gradient.addColorStop(1, colorBar)

                                //bar rempli
                                ctx.beginPath();
                                ctx.lineWidth = 1;
                                ctx.fillStyle = gradient;
                                ctx.globalAlpha = 0.7;

                                ctx.moveTo(75, 160)
                                ctx.quadraticCurveTo(65, 170, 75, 180) //left arc (pi/2 : - pi/2)
                                ctx.lineTo(75 + percentage, 180)
                                ctx.quadraticCurveTo(75 + percentage, 170, 75 + percentage, 160) //right arc (-pi/2 : pi/2)
                                ctx.lineTo(75, 160)

                                ctx.fill();
                                ctx.closePath();

                                ctx.globalAlpha = 1;
                                ctx.font = "10px Arial";
                                ctx.textAlign = "center";
                                ctx.fillStyle = "#ffffff";
                                ctx.fillText(`${curxp}  /  ${newlvl} XP`, 257.5, 132.5);
                                ctx.textAlign = "left";


                                // Nickname
                                changeFont(ctx, memberNick)
                                ctx.fillStyle = color;
                                ctx.fillText(memberNick, 160, 60);

                                ctx.beginPath();
                                ctx.fillStyle = `#${colorHex(memberTag)}`;
                                ctx.fillText(`#${memberTag}`, 260, 60);


                                // Level
                                ctx.beginPath();
                                ctx.fillStyle = "#000000";
                                ctx.font = "15px Tahoma";
                                ctx.fillText("Level:", 190, 115);
                                ctx.fillText(curlvl, 240, 115);


                                // Rank
                                const rankImg = await loadImage(join(__dirname, "../..", "ressources/image", "rank.png"));
                                ctx.drawImage(rankImg, 550, 15, 50, 50);
                                ctx.shadowOffsetY = 4;
                                ctx.shadowColor = "black";
                                ctx.shadowBlur = 6;
                                ctx.font = "bold 45px Comic Sans MS";
                                ctx.fillStyle = "#FEE700";
                                ctx.fillText("RANG:", 610, 60);
                                ctx.fillText(curRank + "/" + allR, 830, 60);

                                // Easter Egg
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
                                ctx.beginPath();
                                //profil hexagone
                                ctx.lineJoin = "round"
                                ctx.lineWidth = 7;
                                ctx.shadowOffsetX = 3;
                                ctx.shadowColor = "black";
                                ctx.shadowBlur = 3;
                                ctx.moveTo(85 + 65 * Math.cos(0), 85 + 65 * Math.sin(0));

                                for (let side = 0; side < 7; side++) {
                                   ctx.lineTo(85 + 65 * Math.cos(side * 2 * Math.PI / 6), 87 + 65 * Math.sin(side * 2 * Math.PI / 6));
                                }

                                ctx.strokeStyle = "#940094";
                                ctx.stroke();
                                ctx.closePath();
                                ctx.clip();
                                const avatar = await loadImage(member.user.displayAvatarURL({dynamic : true, format: 'png'}));
                                ctx.drawImage(avatar, 22, 25, avatar.width, avatar.height);

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

                                const attachment = new MessageAttachment(canvas.toBuffer(), "rang.gif")
                                await message.channel.send(attachment);
                            }

                        });
                }
            });

    }

}


