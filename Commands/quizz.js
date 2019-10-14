const Manager = require("quizz").GameManager;
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    message.channel.send("HELLO BIENVENUE DANS CE PROGRAMME DE REVISION DES ADDITIONS SELON LES BASES!\n" +
        "Sur quel base souhaites tu t'exercer? reagis avec 2️⃣pour le binaire ou bien ❎ pour l'heXadecimal").then(message => {
        message.react('2️').then(r => {
            message.react('❎')

            const binaireFilter = (reaction, user) => reaction.emoji.name === '2️' && user.id === message.author.id;
            const hexaFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

            const binaire = message.createReactionCollector(binaireFilter, {time: 60000});
            const hexa = message.createReactionCollector(hexaFilter, {time: 60000});

            binaire.on('collect', r => {

                message.channel.send('Vpus avez choisis l\'addition binaire, merci de choisir votre niveau de difficulte:').then(message => {
                    message.react('😁').then(r => {
                        message.react('🤯')

                        const binaireFacile = (reaction, user) => reaction.emoji.name === '😁' && user.id === message.author.id;
                        const binaireDur = (reaction, user) => reaction.emoji.name === '🤯' && user.id === message.author.id;

                        const binfacile = message.createReactionCollector(binaireFacile, {time: 60000});
                        const bindur = message.createReactionCollector(binaireDur, {time: 60000});

                        binfacile.on('collect', r => {
                            if(answered === false && message.author === quizUser) {
                                userAnswer = msg;
                                if(userAnswer === cAnswer) {
                                    message.reply("bonne reponse!");
                                }
                                else{
                                    message.reply("tu as du louper une retenue la reponse etait: " + cAnswer);
                                }
                                answered = true; cAnswer = ""; userAnswer = "";

                            }

                            numberOfquestion = 7;
                            var random = Math.floor(Math.random() * (numberOfquestion - 1 + 1) + 1);
                            switch (random) {
                                case 1:
                                    message.channel.send('*ADDITION EN BASE2*: 11001+11110= envoi en message ton resultat '); cAnswer = "110111"; break;
                                case 2:
                                    message.channel.send('*ADDITION EN BASE2*: 10110+10110= envoi en message ton resultat '); cAnswer = "101100"; break;
                                case 3:
                                    message.channel.send('*ADDITION EN BASE2*: 11111+001110= envoi en message ton resultat '); cAnswer = "101101"; break;
                                case 4:
                                    message.channel.send('*ADDITION EN BASE2*: 1110+11101= envoi en message ton resultat '); cAnswer = "101011"; break;
                                case 5:
                                    message.channel.send('*ADDITION EN BASE2*: 111+110= envoi en message ton resultat '); cAnswer = "1101"; break;
                                case 6:
                                    message.channel.send('*ADDITION EN BASE2*: 11101+1100= envoi en message ton resultat '); cAnswer = "101001"; break;
                                case 7:
                                    message.channel.send('*ADDITION EN BASE2*: 10011+1111= envoi en message ton resultat '); cAnswer = "100010"; break;
                            }
                            answered = false;
                            quizUser = message.author;

                        })

                        bindur.on('collect', r => {


                        })

                    })

                })


            })

            hexa.on('collect', r => {

            })

        })
    })

};




module.exports.help = {
    name: 'quizz'
};