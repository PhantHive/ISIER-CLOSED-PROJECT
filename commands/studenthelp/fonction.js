module.exports = {

    name:"fonction",
    aliases: ["fct"],
    category:"studenthelp",
    description:"give help for python function",
    timeout: 120000,
    usage:"fonction",
    run: async(client,message) => {
        message.channel.send("Une fonction, est dans tous langages de programmation un moyen d'exécuter une tache autant de fois que n'ont le souhaitent pour une,\n " +
            "plusieurs ou aucune valeur.\n\n " +
            "Syntaxe python:\n" +
            "def fonction():\n" +
            "   #ecriture de la fonction\n\n" +
            "Deux exemples: \n\n")

            .then(() => message.channel.send({files: ["./python/Hello.jpg/"]}))
            .then(() => message.channel.send("Exemple 2: \n"))
            .then(() => message.channel.send({files: ["./python/HW.jpg/"]}))
    }

};

