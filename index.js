//const ytdl = require('ytdl-core');
//const GOOGLE_API_KEY = 'AIzaSyDse8N2YEPG8v53iSf1klZ95S16tLpGY3Y';
//const Youtube = require('simple-youtube-api');
//const youtube = new Youtube(GOOGLE_API_KEY);
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.mongoose = require('./utils/mongose.js');
const XLD = require('./models/RankSystem.js');

const TOKEN = process.env.token;

client.login(TOKEN);
client.commands = new Discord.Collection();

client.mongoose.init();

//XP PART
let infoLVL = require("./jsonFile/level.json");
//easter part
let easterEgg = require("./jsonFile/easterEgg.json")


fs.readdir("./Commands/", (err, f) => {
    if (err) console.log(err);

    let commands = f.filter(f => f.split(".").pop() === "js");
    if (commands.length <= 0) return console.log("0 commands");

    commands.forEach((f) => {
        let command = require(`./Commands/${f}`);
        console.log(`${f} command done successfully`);

        client.commands.set(command.help.name, command);
    });
});

fs.readdir("./Events/", (err, f) => {
    if (err) console.log(err);
    console.log(`${f.length} events loading`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];
        client.on(event, events.bind(null, client));
    });
});





  //xp system


client.on("message", async message => {

    

    ```
    console.log(gainXP)
      //we look for infoLVL of the message author on the json file if not defined then we define it
    if (!infoLVL[message.author.id]){
        infoLVL[message.author.id] = {
          xp: 0,
          lvl: 1
        };
    }
    ```

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
            let gainXP = Math.floor(Math.random() * 5) + 10; //add some xp by message
            //data
            let curxp = data.XP;
            let curlvl = data.LVL;
            let newlvl = 5 * (curlvl ** 2) + 69 * curlvl + 249;

            //auto accumulate xp
            data.XP += gainXP;

              //look for a new rank master

            if (message.author.bot) {
                return;
            }
            if (newlvl <= curxp && curlvl < 5) {
                curlvl += 1;
        
                let lvlup = new Discord.RichEmbed()
                    .setTitle("LVL +")
                    .setColor("GREEN")
                    .addField(message.author.username + " niveau atteint: ", curlvl + 1, true)
                    .addField("XP: ", newlvl)
                    .setImage("https://i.imgur.com/FFYT8Ll.png");
                message.guild.channels.get('735127110342934568').send(lvlup);
        
                curxp = 0;
            }
            else if (newlvl <= curxp && curlvl < 10) {
        
                curlvl += 1;
                let lvlup2 = new Discord.RichEmbed()
                    .setTitle("LVL ++")
                    .setColor("BLUE")
                    .addField(message.author.username + " TU ES BON, niveau atteint: ", curlvl + 1, true)
                    .addField("XP: ", newlvl)
                    .setImage("https://i.imgur.com/7LVMSKN.png");
                message.guild.channels.get('502931781012684820').send(lvlup2);
        
                curxp = 0;
            }
            else if (newlvl <= curxp && curlvl < 15) {
        
                curlvl += 1;
                let lvlup3 = new Discord.RichEmbed()
                    .setTitle("LVL +++++")
                    .setColor("ORANGE")
                    .addField(message.author.username + " is GOD LIKE, niveau atteint: ", curlvl + 1, true)
                    .addField("XP: ", newlvl)
                    .setImage("https://i.imgur.com/Mnx9Vu0.jpg");
                message.guild.channels.get('502931781012684820').send(lvlup3)
        
                curxp = 0;
            }
            else {
                curlvl;
                curxp;
            }
            
        }
    })

    ```

      //data
    let curxp = infoLVL[message.author.id].xp;
    let curlvl = infoLVL[message.author.id].lvl;
    let newlvl = 5 * (curlvl ** 2) + 69 * curlvl + 249;
      //data

      //auto accumulate xp
    infoLVL[message.author.id].xp = curxp + gainXP;

      //look for a new rank master

    if (message.author.bot) {
        return;
    }
    

    if (newlvl <= infoLVL[message.author.id].xp && curlvl < 5) {
        infoLVL[message.author.id].lvl = curlvl + 1;

        let lvlup = new Discord.RichEmbed()
            .setTitle("LVL +")
            .setColor("GREEN")
            .addField(message.author.username + " niveau atteint: ", curlvl + 1, true)
            .addField("XP: ", newlvl)
            .setImage("https://i.imgur.com/FFYT8Ll.png");
        message.guild.channels.get('502931781012684820').send(lvlup);

        infoLVL[message.author.id].xp = 0;
    }
    else if (newlvl <= infoLVL[message.author.id].xp && curlvl < 10) {

        infoLVL[message.author.id].lvl = curlvl + 1;
        let lvlup2 = new Discord.RichEmbed()
            .setTitle("LVL ++")
            .setColor("BLUE")
            .addField(message.author.username + " TU ES BON, niveau atteint: ", curlvl + 1, true)
            .addField("XP: ", newlvl)
            .setImage("https://i.imgur.com/7LVMSKN.png");
        message.guild.channels.get('502931781012684820').send(lvlup2);

        infoLVL[message.author.id].xp = 0;
    }
    else if (newlvl <= infoLVL[message.author.id].xp && curlvl < 15) {

        infoLVL[message.author.id].lvl = curlvl + 1;
		let lvlup3 = new Discord.RichEmbed()
            .setTitle("LVL +++++")
            .setColor("ORANGE")
            .addField(message.author.username + " is GOD LIKE, niveau atteint: ", curlvl + 1, true)
            .addField("XP: ", newlvl)
            .setImage("https://i.imgur.com/Mnx9Vu0.jpg");
        message.guild.channels.get('502931781012684820').send(lvlup3)

        infoLVL[message.author.id].xp = 0;
	}
    else {
        infoLVL[message.author.id].lvl;
        infoLVL[message.author.id].xp;
    }
    fs.writeFile("./jsonFile/level.json", JSON.stringify(infoLVL), (err) => {
          if (err) console.log(err);
          });
```

      console.log(`ur level: ${curlvl}`);

     //Easter egg system counter

    if (!easterEgg[message.author.id]) {
      easterEgg[message.author.id] = {
            counter: 0
        }
    }

    let curCounter = easterEgg[message.author.id].counter;

    

    if (message.channel.type === "dm") {

        if(message.content === "je t'aime" || "je taime" || "jtm" || "je t aime") {
            console.log(infoLVL)
            if (curCounter == 0) {

                message.reply("***Tu es mon premier amour!*** Tu as complete un easterEgg, tu ne peux plus gagner de point la dessus, tu as gagne 500xp");
                easterEgg[message.author.id].counter = curCounter + 1;
                infoLVL[message.author.id].lvl = curlvl + 2;
                console.log(easterEgg)
                console.log(infoLVL)
            } else {
              message.reply("Utilises le channel discord commandes bot pour pouvoir m'utiliser")
            }
            fs.writeFile("./jsonFile/easterEgg.json", JSON.stringify(easterEgg), (err) => {
                if (err) console.log(err);
            });



      } else {

        message.reply("Utilises le channel discord commandes bot pour pouvoir m'utiliser")

      }
    }

    

});
