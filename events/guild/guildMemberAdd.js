const MV = require('../../models/MailSystem.js');

module.exports = (client, member, message) => {

    console.log("test")
    let mailData = MV.findOne({
            userId: member.id
        },

        async(err, data) => {
            if (!data) {
                member.createDM().then(channel => {
                    channel.send("Bonjour je suis chargé de te vérifier!\n " +
                        "Envoie ton mail sous format: **prenom.nom@ipsa.fr**\n" +
                        "(environs 5 secondes pour traiter la demande)")

                }).catch(err => console.log(err))
            }
            else {
                member.createDM().then(channel => {
                    channel.send("Bonjour tu as déjà été vérifer en accord avec notre base de donnée!\n" +
                        "Je procède aux vérifications serveur.");

                    let guilds = ['880491243807846450', '880499115878932571', '755084203779162151', '608155753748103170'];
                    guilds.forEach(serv => {
                        let guild = client.guilds.cache.get(serv);
                        let user = member.id;
                        let role;
                        let oldrole;
                        if (guild.members.fetch(user)) {

                            try {
                                role = message.guild.roles.find(r => r.name === "IPSAlien");
                            }
                            catch (error) {}

                            try {
                                oldrole = message.guild.roles.find(r => r.name === "Invité");
                            }
                            catch (error) {}

                            try {
                                oldrole = message.guild.roles.find(r => r.name === "Incruste");
                            }
                            catch (error) {}

                            guild.members.cache.get(user).roles.add(role);
                            guild.members.cache.get(user).roles.remove(oldrole);

                        }


                    });

                }).catch(err => console.log(err))
            }

        }
    )





}