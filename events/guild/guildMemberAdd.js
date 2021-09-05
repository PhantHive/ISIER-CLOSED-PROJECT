

module.exports = (client, member, message) => {

    console.log("test")
    member.createDM().then(channel => {
        channel.send("Bonjour je suis chargé de te vérifier!\n " +
            "Envoie ton mail sous format: **prenom.nom@ipsa.fr**\n" +
            "(environs 5 secondes pour traiter la demande)")

    }).catch(err => console.log(err))



}