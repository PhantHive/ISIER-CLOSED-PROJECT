const Discord = require('discord.js');

module.exports =  {
    name:"algo",
    aliases: ["addbase", "binaire", "hexa"],
    category:"studenthelp",
    description:"give algo exercices",
    usage:"pyaide",
    run: async(client,message) => {

        const embed = new Discord.MessageEmbed()
            .setTitle("REVISIONS BINAIRE ET HEXA")
            .setColor("ORANGE")
            .setFooter("Reagissez avec une des 2 emojis pour acceder au programme de revision");
        let messageEmbed = await message.channel.send(embed);

        await messageEmbed.react('🅱');
        await messageEmbed.react('❎');

        const Filter = (reaction, user) => (reaction.emoji.name === '🅱' || reaction.emoji.name === '❎') && message.author.id === user.id; //filter
        messageEmbed.awaitReactions(Filter, {
            max: 1,
            time: 15000
        }).then(collected => {
            const reaction = collected.first();

            switch (reaction.emoji.name) {
                case '🅱':
                    const embedChoice = new Discord.MessageEmbed()
                        .setTitle("PROGRAMME BINAIRE")
                        .setColor("ORANGE")
                        .addField("Choisissez votre niveau de difficulte:", false)
                        .setFooter("Reagissez avec l'une des emojis ci-dessous");
                    message.channel.send(embedChoice).then(async message => {

                        await message.react('🙂');
                        await message.react('😖');
                        await message.react('😤');

                        const Filter = (reaction, user) => (reaction.emoji.name === '🙂' || reaction.emoji.name === '😖' || reaction.emoji.name === '😤') && message.author.id === user.id;
                        message.awaitReactions(Filter, {
                            max: 1,
                            time: 15000
                        }).then(collected => {
                            const reaction2 = collected.first();
                            //collector

                            switch (reaction2.emoji.name) {
                                case '🙂':
                                    message.channel.send("verif");
                                    //const numberOfuestion = 2;
                                    var random = 1; //Math.floor(Math.random() * (numberOfquestion - 1 ) + 1);

                                    switch (random) {
                                        case 1:
                                            const underfilter = (reaction, user) => ['❤', '💝', '💖', '🖤'].includes(reaction.emoji.name) && user.id === message.author.id;

                                            const embed = new Discord.MessageEmbed()
                                                .setColor("ORANGE")
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
                                                }).then(collected3 => {
                                                        const reaction3 = collected3.first();


                                                        if (reaction3.emoji.name === '❤') {
                                                            message.channel.send("YESSS ceci est la bonne reponse MAMENE");
                                                        }
                                                        if (reaction3.emoji.name === '💝') {
                                                            message.channel.send("Oups, tu as du zaper une retenue, la reponse etait:  110111");
                                                        }
                                                        if (reaction3.emoji.name === '💖') {

                                                            message.channel.send("Oups, tu as du zaper une retenue, la reponse etait:  110111");
                                                        }
                                                        if (reaction3.emoji.name === '🖤') {

                                                            message.channel.send("Oups, tu as du zaper une retenue, la reponse etait:  110111");
                                                        }
                                                    }
                                                )

                                            });
                                            break;

                                        case 2:
                                            /* const filter2 = (reaction, user) =>  ['1️⃣', '2️⃣', '3️⃣', '4️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
                                             const embed2 = new Discord.MessageEmbed
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

                                    }

                                    break;

                                case '😖':

                                    break;

                                case '😤':

                                    break;
                            }
                        })
                    });

                    break;

                case '❎':
                    break;
            }
        })
    }
};
