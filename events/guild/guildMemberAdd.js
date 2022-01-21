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

                if (member.guild.id === "809190693196529704") {
                    const incrusteRole = member.guild.roles.cache.find(role => role.name === "Incruste");
                    member.roles.add(incrusteRole);
                }
            }
            else {
                member.createDM().then(channel => {
                    channel.send("Bonjour tu as déjà été vérifé en accord avec notre base de données!\n" +
                        "Je procède aux vérifications serveur.");

                    let guilds = ['880491243807846450', '880499115878932571', '755084203779162151', '608155753748103170'];
                    guilds.forEach(serv => {
                        let guild = client.guilds.cache.get(serv);
                        let user = member.id;
                        let role;
                        let oldrole;
                        if (guild.member(user)) {

                            if (member.guild.id === "809190693196529704") {
                                channel.send({ content: "Bienvenue l'élite! (je t'ai add les rôles sur le serveur Système ;)" })

                                role = member.guild.roles.cache.find(r => r.name === "l'elite");
                                oldrole = member.guild.roles.cache.find(r => r.name === "Incruste");
                            }
                            else {
                                try {
                                    role = member.guild.roles.cache.find(r => r.name === "IPSAlien");
                                }
                                catch (error) {}

                                try {
                                    oldrole = member.guild.roles.cache.find(r => r.name === "Invité");
                                }
                                catch (error) {
                                    try {
                                        oldrole = member.guild.roles.cache.find(r => r.name === "Incruste");
                                    }
                                    catch (error) {}
                                }
                            }



                            guild.members.cache.get(user).roles.add(role);
                            guild.members.cache.get(user).roles.remove(oldrole);

                        }


                    });

                }).catch(err => console.log(err))
            }

        }
    )





}