const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    message.channel.send(
        "tu ne comprends rien a python??? pas de panique voici un peu d'aide pour utiliser tkinter!" +
        "```py\n" +
        "from tkinter import * #ceci signifie qu on veux importer tous modules provenant de la librairie tkinter\n" +
        "import tkinter as t #ceci signifie que l'on souhaite appel la libraire tkinter en commencant par t.\n" +
        "\n" +
        "# voici comment l'on cree un menu graphique\n" +
        "master = t.Tk() #ceci est l'initialisation de notre menu tkinter on le nomme ici master\n" +
        "master.geometry(\"650x250\") #voici le format de notre fenetre graphique\n" +
        "master.title(\"TP02--THE BEGINNING\") #ici il s'agit simplement du titre afficher en haut de la fenetre\n" +
        "#=============================================```"
    )
};

module.exports.help = {
    name: "tkaide"
};