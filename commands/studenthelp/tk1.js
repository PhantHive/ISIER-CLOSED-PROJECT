const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send("Bienvenue dans ce petit tutoriel tkinter Etape 1 :)\n\n")
    .then(() => message.channel.send({file: './tkinter/tk01.jpg/'}))
    .then(() => message.channel.send({file: './tkinter/separation.gif/'}))
    .then(() => message.channel.send({file: './tkinter/tk02.jpg/'}))
    .then(() => message.channel.send({file: './tkinter/separation.gif/'}))
    .then(() => message.channel.send({file: './tkinter/tk03.jpg/'}))
    
};

module.exports.help = {
    name: "tk1"
};