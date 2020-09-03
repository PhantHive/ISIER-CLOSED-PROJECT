


module.exports.run = async(client, message, args) => {

    message.channel.send("Une fonction, est dans tous langages de programmation un moyen d'exécuter une tache autant de fois que n'ont le souhaitent pour une,\n " + 
                        "plusieurs ou aucune valeur.\n\n " +
                        "Syntaxe python:\n\n" +
                        "def fonction():\n" +
                        "   #ecriture de la fonction\n" +
                        "Deux exemples: \n\n")
                        
                        .then( () => message.channel.send({file: "./python/Hello.PNG/"}))
                        .then( () => message.channel.send("Exemple 2: \n"))
                        .then( () => message.channel.send({file: "./python/helloWorld.PNG/"}))


};

module.exports.help = {
    name: "fonction"
};