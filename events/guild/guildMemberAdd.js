

module.exports = (client, member, message) => {


    member.createDM().then(channel => {
        channel.send("Bonjour je suis chargé de te vérifier!\n " +
            "envoie moi **ready** pour etre vérifier!")
    }).catch(err => console.log(err))



}