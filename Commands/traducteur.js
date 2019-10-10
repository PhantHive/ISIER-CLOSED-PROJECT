const Discord = require('discord.js');
const urban = require('relevant-urban');
const translate = require('translate');

const urbanCommand = require('./definition.js');

translate.engine = 'yandex';
translate.key = process.env.TRANSLATE_KEY;

module.exports.run = async (client, message, args) => {

    const filter = (reaction, user) => ['📖','❌'].includes(reaction.emoji.name) && user.id === message.author.id;

    if(!args[0]) return ("rien n\'a traduire deso")

    message.channel.startTyping();

    const mot = args.join(' ');
    translate.from = 'fr'
    const motTraduit = await translate(mot, {to:'en'}).catch(e => {
        return message.channel.send('impossible a traduire');
    });

    message.channel.send(`Voici la traduction du mot **${mot}** ==> **${motTraduit}** \n Si tu souhaites sa definition reagis en dessous '📖' (il s\'agit de definition ludique et non formel a l\'americaine!`).then(async message => {

        await message.react('📖');
        await message.react('❌');

        message.awaitReactions(filter, {
            max: 1,
            time: 60000,
            errors: ['time']
        }).then(collected => {
            const reaction = collected.first();

            switch (reaction.emoji.name) {
                case '📖':
                    message.channel.send(`i!def ${motTraduit}`).then(message => {
                        message.delete(100)
                    });

                    break;

                case '❌':
                    message.channel.send("Au plaisir de t\'avoir aider :)");
                    break;
            }

        }).catch(collected => {
            return message.channel.send('Je n\'ai pas pu acceder a ta requete reesaye');
        });


    });
    message.channel.stopTyping();
};

module.exports.help = {
    name: 'frToen'
};

