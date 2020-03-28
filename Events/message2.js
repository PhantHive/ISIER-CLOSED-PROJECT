const Discord = require('discord.js');
const prefix = "i!";
const fs = require("fs");


module.exports = async(client, message2) => {

    //=============


    if (message.author.bot) return;

    //fonction special
    var chaine = String(message.content);

    if (chaine.indexOf("drop") !== -1) {
        message.reply('Go ici amigo=> <#611829345446658048>' );
    }


    //=================



    //==============================

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    const cmd = client.commands.get(command);

    if(!cmd) return message.reply("il semblerai que tu ai besoin de m'appeler, si tu ne connais pas les commandes je t'invite a faire i!aide");

    cmd.run(client, message, args);



}
