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

                    if (answered === false && message.author === quizUser) {
                        userAnswer = message;
                        if (userAnswer === cAnswer) {
                            message.reply("bonne reponse!");
                        } else {
                            message.reply("tu as du louper une retenue la reponse etait: " + cAnswer);
                        }
                        answered = true;
                        cAnswer = "";
                        let userAnswer = "";

                    }

                    numberOfquestion = 7;
                    var random = Math.floor(Math.random() * (numberOfquestion - 1 + 1) + 1);
                    switch (random) {
                        case 1:
                            message.channel.send("*ADDITION EN BASE2*: 11001+11110= envoi en message ton resultat");
                            cAnswer = "110111";
                            break;
                        case 2:
                            message.channel.send("*ADDITION EN BASE2*: 10110+10110= envoi en message ton resultat ");
                            cAnswer = "101100";
                            break;
                        case 3:
                            message.channel.send("*ADDITION EN BASE2*: 11111+001110= envoi en message ton resultat");
                            cAnswer = "101101";
                            break;
                        case 4:
                            message.channel.send("*ADDITION EN BASE2*: 1110+11101= envoi en message ton resultat");
                            cAnswer = "101011";
                            break;
                        case 5:
                            message.channel.send("*ADDITION EN BASE2*: 111+110= envoi en message ton resultat ");
                            cAnswer = "1101";
                            break;
                        case 6:
                            message.channel.send("*ADDITION EN BASE2*: 11101+1100= envoi en message ton resultat ");
                            cAnswer = "101001";
                            break;
                        case 7:
                            message.channel.send("*ADDITION EN BASE2*: 10011+1111= envoi en message ton resultat ");
                            cAnswer = "100010";
                            break;
                    }
                    answered = false;
                    let quizUser = message.author;


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

