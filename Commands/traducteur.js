const Discord = require('discord.js');
const urban = require('relevant-urban');
const translate = require('translate');

const urban = require('./Commands/urban.js/');

translate.engine = 'yandex';
translate.key = process.env.TRANSLATE_KEY;

module.exports.run = async (client, message, args) => {
    if(!args[0]) return ("rien n\'a traduire deso")

    let mot = await args.join(' ').catch(e => {
        return message.channel.send('impossible a traduire');
    });
    client.startTyping();

    const motTraduit = translate(m, 'en')

    message.reply(`Voici la traduction du mot **${args}** ==> **${motTraduit}** \n Si tu souhaites sa definition reagis en dessous '📖'`).then( message => {
        message.react('📖').then(r => {

            const defFilters = (reaction, user) => reaction.emoji.name === '📖' && message.author.id;

            const def = message.createReactionCollector(defFilters, {time:60000});

            def.on('collect', r => {
                urban(motTraduit)
            })
        })
    })
};

module.exports.help = {
    name: 'frToen'
};

