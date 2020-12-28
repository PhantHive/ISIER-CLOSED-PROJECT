const Discord = require('discord.js');
const urban = require('relevant-urban');
const translate = require('translate');

translate.engine = 'yandex';
translate.key = process.env.TRANSLATE_KEY;

module.exports = {
    name:"frToen",
    aliases: ["english", "tsl", "traduit"],
    category:"miscellaneous",
    description:"translate a french word to english",
    usage:"frToen",
    run: async(client, message, args) => {
        const filter = (reaction, user) => ['📖', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;

        if (!args[0]) return ("rien n\'a traduire deso")



        const mot = args.join(' ');
        translate.from = 'fr'
        const motTraduit = await translate(mot, {to: 'en'}).catch(e => {
            return message.channel.send('impossible a traduire');
        });

        message.channel.startTyping();
        message.channel.send(`Voici la traduction du mot **${mot}** ==> **${motTraduit}** \n Si tu souhaites sa definition reagis en dessous '📖' (il s\'agit de definition ludique et non formel a l\'americaine!`).then(async message => {

            await message.react('📖');
            await message.react('❌');

            message.awaitReactions(filter, {
                max: 1,
                time: 60000,
                errors: ['time']
            }).then(async (collected) => {
                const reaction = collected.first();

                switch (reaction.emoji.name) {
                    case '📖':

                        let res = await urban(args.join(' ')).catch(e => {
                            return message.channel.send('mot introuvable dans le dico');
                        });
                        const definition = `***DEF:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`
                        const deftofr = await translate(definition, 'fr')

                        const embed = new Discord.MessageEmbed()
                            .setColor('ORANGE')
                            .setTitle(`URBAN DICO | ${res.word}`)
                            .setURL(res.urbanURL)
                            .setDescription(deftofr)
                            .addField('Auteur:', res.author, true);


                        if (res.tags.length > 0 && res.tags.join(', ').length < 1024) {

                            embed.addField('Tags:', res.tags.join(', '), true)

                        }

                        await message.channel.send(embed);
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
    }
};


