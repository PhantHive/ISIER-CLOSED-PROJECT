const Discord = require('discord.js');
const fs = require("fs");


module.exports = async(client, message) => {

    //=============


    if (message.author.bot) return;

    //fonction special
    var chaine = String(message.content);

    if (chaine.indexOf("drop") !== -1) {
        message.reply('Go ici amigo=> <#611829345446658048>' );
    }


    //=================



    //==============================



}
