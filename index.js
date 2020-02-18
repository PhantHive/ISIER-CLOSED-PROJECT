//const ytdl = require('ytdl-core');
//const GOOGLE_API_KEY = 'AIzaSyDse8N2YEPG8v53iSf1klZ95S16tLpGY3Y';
//const Youtube = require('simple-youtube-api');
//const youtube = new Youtube(GOOGLE_API_KEY);

const http = require('http');
//const cheerio = require('cheerio');
const express = require('express');
const app = express();
var server = require('http').createServer(app);


//XP PART
let infoLVL = require("./jsonFile/level.json");


//=========
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping received");
    response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const TOKEN = process.env.TOKEN;

client.login(TOKEN);
client.commands = new Discord.Collection();

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

//join user
client.on('guildMemberAdd', member => {
    //JOIN SERVER
    let embed = new Discord.RichEmbed()
        .setDescription('\nHELLO! bienvenue Ipsalien' + member.user + '\n check tes messages prives')
        .setFooter('Now we are ' + member.guild.memberCount + ' users')
        .setColor('F9841F')
        .setThumbnail('https://imgur.com/oamlctq.png')
        .setTitle('IPSA')
    member.guild.channels.get('622155677338566656').send(embed).then(
        member.createDM().then(
            channel => {
                channel.send(
                    `Salutation Ipsalien et bienvenue sur le discord  ***${member.guild.name}*** 😉\n` +
                    '\n' +
                    'Premiere chose a faire vas sur ce channel---> <#611829909332951055> \n' +
                    '                               Puis choisis ta classe et tes assos ici---> <#611653257806217244>  \n' +
                    '\n' +
                    '                                                 ●¸.•*¨Ƹ̵̡Ӝ̵̨̄Ʒ¨*•.¸●\n');


            }).catch(console.error)
    )
});




  //xp system


client.on("message", async message => {

      let gainXP = Math.floor(Math.random() * 5) + 1; //add some xp by message
      console.log(gainXP)
      //we look for infoLVL of the message author on the json file if not defined then we define it
      if (!infoLVL[message.author.id]){
        infoLVL[message.author.id] = {
          xp: 0,
          lvl: 1
        };
      }

      //auto accumulate xp
      infoLVL[message.author.id].xp = infoLVL[message.author.id] + gainXP;

      //data
      let curxp = infoLVL[message.author.id].xp;
      let curlvl = infoLVL[message.author.id].lvl;
      let newlvl = curlvl*50;
      //data

      //look for a new rank master
      if (newlvl <= curxp && curlvl < 10) {
        curlvl = curlvl + 1;

      } fs.writeFile("../jsonFile/infoLVL.json", JSON.stringify(infoLVL), (err) => {
        if (err) console.log(err);
      });

      
      console.log(`ur level: ${curlvl}`);


});
