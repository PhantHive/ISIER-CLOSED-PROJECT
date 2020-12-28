//const ytdl = require('ytdl-core');
//const GOOGLE_API_KEY = 'AIzaSyDse8N2YEPG8v53iSf1klZ95S16tLpGY3Y';
//const Youtube = require('simple-youtube-api');
//const youtube = new Youtube(GOOGLE_API_KEY);
const { Client, Collection, MessageEmbed } = require("discord.js");
const client = new Client();
const fs = require('fs');
client.mongoose = require('./utils/mongose.js');
const XLD = require('./models/RankSystem.js');
const EGD = require('./models/EasterSystem.js');


["aliases", "commands"].forEach(x => client[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handler/${x}`)(client));

client.login(process.env.token);


client.mongoose.init();


client.on("message", async message => {

    if (message.channel.type === "dm") return;
        //using promises :P
    let current = null,
        rank = 0;

    const lb = XLD.find().sort({"LEVEL": -1, "XP": -1});
    lb.exec((err, doc) => {
        if (err) console.log(err);

        doc.forEach(underDoc => {
            if ( underDoc._id !== current || current == null ) {
              let curRank = rank;
              let current = underDoc._id;
            }
            rank++;
            underDoc.RANK = rank;
            underDoc.save()
        })
 
    });
   

    //mongoDB
    let data = XLD.findOne({

        ID: message.author.id + "-" + message.guild.id

    },
    (err, data) => {
        if (err) console.log(err);


        if (message.author.bot) {
            return;
        }
    
        if(!data) {
            new XLD({
                ID: message.author.id + "-" + message.guild.id,
                serverID: message.guild.id,
                XP: 0,
                LEVEL: 1,
                RANK: 0
            }).save()
        } 
        else {
            /*

            var leaderboard = XLD.find({LEVEL: {$exists: true}, XP: {$exists: true}}).sort({LEVEL: -1, XP: -1});
            var count = leaderboard.count();
            var i = 1;
            while(count.hasNext()) {
            var position = i;
            var user = leaderboard.next();
            user.update(
                {"ID": member.id + "-" + message.guild.id},
                {"$set": {"POSITION": position}}
            );
            i ++;
            }
            console.log(position);
            */
            
            if (message.channel.id === '755084204567560232') return;

            if (message.channel.type === "dm") {
                return;
            }
            
            if (data.LEVEL < 5) {

                var xpRand = [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                let gainXP = xpRand[Math.floor(Math.random() * xpRand.length)] ; //add some xp by message
                //data
                let curxp = data.XP;
                let curlvl = data.LEVEL;
                let newlvl = 25 * (curlvl** 2) + 169 * curlvl + 845;

                //auto accumulate xp

                data.XP = curxp + gainXP;

                if (newlvl <= data.XP && curlvl < 5) {
                    data.LEVEL = curlvl + 1;

                    let lvlup = new MessageEmbed()
                        .setTitle("LVL +")
                        .setColor("GREEN")
                        .addField(message.author.username + " niveau atteint: ", curlvl + 1, true)
                        .addField("XP: ", newlvl)
                        .setImage("https://i.imgur.com/FFYT8Ll.png");
                    const channel = message.guild.channels.find(ch => ch.name === '🔧▶commandes-bots◀🔧');
                    channel.send(lvlup);

                    data.XP = 0;
        
                }

                else {
                    data.LEVEL;
                    data.XP;
                    
                }   
                data.save()

            }
            else {

                var xpRand = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                let gainXP = xpRand[Math.floor(Math.random() * xpRand.length)] ; //add some xp by message

                //data
                let curxp = data.XP;
                let curlvl = data.LEVEL;
                let newlvl = 25 * (curlvl** 2) + 169 * curlvl + 845;

                //auto accumulate xp

                data.XP = curxp + gainXP;

                if (newlvl <= data.XP && curlvl < 10) {

                    data.LEVEL = curlvl + 1;
                    let lvlup2 = new MessageEmbed()
                        .setTitle("LVL ++")
                        .setColor("BLUE")
                        .addField(message.author.username + " TU ES BON, niveau atteint: ", curlvl + 1, true)
                        .addField("XP: ", newlvl)
                        .setImage("https://i.imgur.com/7LVMSKN.png");
                    const channel = message.guild.channels.find(ch => ch.name === '🔧▶commandes-bots◀🔧');
                    channel.send(lvlup2);

                    data.XP = 0;
                }
                else if (newlvl <= data.XP && curlvl < 15) {

                    data.LEVEL = curlvl + 1;
                    let lvlup3 = new MessageEmbed()
                        .setTitle("LVL +++++")
                        .setColor("ORANGE")
                        .addField(message.author.username + " is GOD LIKE, niveau atteint: ", curlvl + 1, true)
                        .addField("XP: ", newlvl)
                        .setImage("https://i.imgur.com/Mnx9Vu0.jpg");
                    const channel = message.guild.channels.find(ch => ch.name === '🔧▶commandes-bots◀🔧');
                    channel.send(lvlup3);

                    data.XP = 0;
                }
                else {
                    data.LEVEL;
                    data.XP;
                    
                }   
                data.save()


            }
            
            
        }
    });
 

});

