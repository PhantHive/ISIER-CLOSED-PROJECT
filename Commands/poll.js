const Discord = require('discord.js');

module.exports.run = async ( client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setTitle("REVISIONS BINAIRE ET HEXA")
        .setColor("ORANGE")
        .setFooter("Reagissez avec une des 2 emojis pour acceder au programme de revision");
    let messageEmbed = await message.channel.send(embed);

    await messageEmbed.react('🅱');
    await messageEmbed.react('❎');

    const Filter = (reaction) => (reaction.emoji.name === '🅱' || reaction.emoji.name === '❎') && message.author === user.id; //filter
    const firstCollection = await messageEmbed.awaitReactions(Filter, {
        time: 10000
    });

    switch (firstCollection) {
        case '🅱':

            const embedChoice = new Discord.RichEmbed()
                .setTitle("PROGRAMME BINAIRE")
                .setColor("ORANGE")
                .addField("Choisissez votre niveau de difficulte:")
                .setFooter("Reagissez avec l'une des emojis ci-dessous");
            let messageEmbedChoice = await message.channel.send(embedChoice);

            await messageEmbedChoice.react('🙂');
            await messageEmbedChoice.react('😖');
            await messageEmbedChoice.react('😤');


            const secondFilter = (reaction) => (reaction.emoji.name === '🙂' || reaction.emoji.name === '😖' || reaction.emoji.name === '😤') && message.author === user.id;
            const secondCollection = await messageEmbed.awaitReactions(secondFilter, {
                time: 10000
            }); //collector

            switch (secondCollection) {
                case '🙂':
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
                                }).then(collected => {
                                        const reaction2 = collected.first();


                                        if (reaction2.emoji.name === '❤') {
                                            message.channel.send("YESSS ceci est la bonne reponse MAMENE");
                                        }
                                        if (reaction2.emoji.name === '💝') {
                                            message.channel.send("Oups, tu as du zaper une retenue, la reponse etait:  110111");
                                        }
                                        if (reaction2.emoji.name === '💖') {

                                            message.channel.send("Oups, tu as du zaper une retenue, la reponse etait:  110111");
                                        }
                                        if (reaction2.emoji.name === '🖤') {

                                            message.channel.send("Oups, tu as du zaper une retenue, la reponse etait:  110111");
                                        }
                                    }
                                )

                            });
                            break;

                        case 2:
                            /* const filter2 = (reaction, user) =>  ['1️⃣', '2️⃣', '3️⃣', '4️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
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
                                     const reaction = collected.first();
                                     */

                            break;

                        case '😖':

                            break;

                        case '😤':

                            break;
                    }

                    break;

                case '❎':
                    break;


            }
    }
};


module.exports.help = {
  name: 'addBase'
};