const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    message.channel.send(
        "tu ne comprends rien a python??? pas de panique voici un peu d'aide pour utiliser tkinter!\n"+
        "Je t'invite a commencer le tutoriel avec la commande i!tk1 puis i!tk2 etc... (le tuto sera ameliorer au fur et a mesure de l'annee. A vos clavier!"
    )
};

module.exports.help = {
    name: "tkaide"
};