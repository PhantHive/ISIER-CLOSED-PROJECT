const Discord = require('discord.js');
const urban = require('relevant-urban');
const translate = require('translate');

translate.engine = 'yandex';
translate.key = process.env.TRANSLATE_KEY;

module.exports.run = async (client, message, args) => {

    if(!args[0]) return message.channel.send(`*Definition du mot     :           . :P`);


    let res = await urban(args.join(' ')).catch(e => {
        return message.channel.send('mot introuvable dans le dico');
    });
    const definition = `***DEF:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`
    const deftofr = await translate(definition, 'fr')

    const embed = new Discord.RichEmbed()
        .setColor('ORANGE')
        .setTitle(`URBAN DICO | ${res.word}`)
        .setURL(res.urbanURL)
        .setDescription(deftofr)
        .addField('Auteur:', res.author, true);


    if (res.tags.length > 0 && res.tags.join(', ').length < 1024) {

        embed.addField('Tags:', res.tags.join(', '), true)

    }

    message.channel.send(embed);



};

module.exports.help = {
    name: 'def'
};

