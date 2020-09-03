


module.exports.run = async(client, message, args) => {

    message.channel.send("Une fonction, est dans tous langages de programmation un moyen d'exécuter une tache autant de fois que n'ont le souhaitent pour une,\n " + 
                        "plusieurs ou aucune valeur.\n " +
                        "Syntaxe python:\n" +
                        "def fonction():\n" +
                        "   #ecriture de la fonction\n" +
                        "Deux exemples: \n\n")
                        
                        .then( () => message.channel.send({file: "./python/Hello.png"}))
                        .then( () => message.channel.send("Exemple 2: \n"))
                        .then( () => message.channel.send({file: "./python/helloWorld.png"}))


};

module.exports.help = {
    name: "fonction"
};