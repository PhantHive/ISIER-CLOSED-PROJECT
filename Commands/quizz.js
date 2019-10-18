const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const filter = (reaction, user) => ['✌🏾','❎'].includes(reaction.emoji.name) && user.id === message.author.id;

    message.channel.startTyping();

    const embed = new Discord.RichEmbed()
        .setColor('#DB13C2')
        .setTitle('Choisis la Base')
        .addField("HELLO BIENVENUE DANS CE PROGRAMME DE REVISION DES ADDITIONS SELON LES BASES!\n" +
            "Sur quel base souhaites tu t'exercer? reagis avec ✌🏾 pour le binaire ou bien ❎ pour l'heXadecimal");
    message.channel.send(embed).then(async message => {

        await message.react('✌🏾');
        await message.react('❎');

        message.awaitReactions(filter, {
            max: 1,
            time: 60000,
            errors: ['time']
        }).then(collected => {
            const reaction = collected.first();

            switch (reaction.emoji.name) {
                case '✌🏾':
                    numberOfquestion = 2;
                    var random = Math.floor(Math.random() * (numberOfquestion - 1 + 1) + 1);
                    switch (random) {
                        case 1:
                            const underfilter = (reaction, user) => ['❤', '💝', '💖', '🖤'].includes(reaction.emoji.name) && user.id === message.author.id;

                            const embed = new Discord.RichEmbed()
                                .setColor('#DB13C2')
                                .setTitle('ADDITION BINAIRE- NORMAL')
                                .addField("*ADDITION EN BASE2*: 11001+11110=\n" +
                                    "Reponse A: 110111\n" +
                                    "Reponse B: 111001\n" +
                                    "Reponse C: 1110011\n" +
                                    "Reponse D: 111011");
                            message.channel.send(embed).then(async message => {

                                    await message.react('❤');
                                    await message.react('💝');
                                    await message.react('💖');
                                    await message.react('🖤');



                                    message.awaitReactions(underfilter, {
                                        max: 1,
                                        time: 60000,
                                        errors: ['time']
                                    }).then (collected => {
                                            const reaction2 = collected.first();


                                            if (reaction2.emoji.name === '❤') {
                                                message.channel.send("YESSS ceci est la bonne reponse MAMENE");
                                            }
                                            if(reaction2.emoji.name === '💝') {
                                                    message.channel.send("Oups, tu as du zaper une retenue, la reponse etait:  110111");
                                            }
                                            if(reaction2.emoji.name === '💖') {

                                                message.channel.send("Oups, tu as du zaper une retenue, la reponse etait:  110111");
                                            }
                                            if(reaction2.emoji.name === '🖤') {

                                                message.channel.send("Oups, tu as du zaper une retenue, la reponse etait:  110111");
                                            }
                                        }

                                    )

                                });
                            break;

                        case 2:
                            const filter2 = (reaction, user) =>  ['1️⃣', '2️⃣', '3️⃣', '4️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
                            const embed2 = new Discord.RichEmbed
                                .setColor('#DB13C2')
                                .setTitle('ADDITION BINAIRE-NORMAL')
                                .addField("*ADDITION EN BASE2*: 10110+10110=\n" +
                                    "Reponse A: 111011\n" +
                                    "Reponse B: 11001\n" +
                                    "Reponse C: 101100\n" + //bonne reponse ici
                                    "Reponse D: 11111")
                            message.channel.send(embed2).then(async message => {

                                    await message.react('1️⃣');
                                    await message.react('2️⃣');
                                    await message.react('3️');
                                    await message.react('4️');

                                    message.awaitReactions(filter2, {
                                        max: 1,
                                        time: 60000,
                                        errors: ['time']
                                    }).then(collected => {
                                        const reaction = collected.first()

                                        switch(reaction.emoji.name) {

                                            case '1️':

                                                break;

                                            case '2️':

                                                break;

                                            case '3️':

                                                break;

                                            case '4️':

                                                break;

                                            }

                                        })
                                    });
                            break;


                        //case 3:
                            //message.channel.send("*ADDITION EN BASE2*: 11111+001110= envoi en message ton resultat");
                            //cAnswer = "101101";
                            //break;
                        //case 4:
                            //message.channel.send("*ADDITION EN BASE2*: 1110+11101= envoi en message ton resultat");
                            //cAnswer = "101011";
                            //break;
                        //case 5:
                          //  message.channel.send("*ADDITION EN BASE2*: 111+110= envoi en message ton resultat ");
                            //cAnswer = "1101";
                            //break;
                        //case 6:
                            //message.channel.send("*ADDITION EN BASE2*: 11101+1100= envoi en message ton resultat ");
                            //cAnswer = "101001";
                            //break;
                        //case 7:
                            //message.channel.send("*ADDITION EN BASE2*: 10011+1111= envoi en message ton resultat ");
                            //cAnswer = "100010";
                            //break;
                    }

                    break;

                case '❎':

                    break;
            }

        }).catch(collected => {
            return message.channel.send('Je n\'ai pas pu acceder a ta requete reesaye');
        });


    });
    message.channel.stopTyping();
};

module.exports.help = {
    name: 'addBase'
};
