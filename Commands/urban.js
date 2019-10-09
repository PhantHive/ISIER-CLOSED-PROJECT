const Discord = require('discord.js');
const urban = require('urban');
const stripIndents = require('common-tags');
const RichEmbed = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (args < 1 || !["random", "search"].includes(args[0])) return message.channel.send("i!urban search word");
    message.channel.startTyping();
    let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random();
        try {
            search.first(res => {
                if (!res) return message.channel.send("je ne trouve pas la definition");
                let {word, definition, example, author} = res;

                    let embed = new RichEmbed()
                        .setColor(orange)
                        .setAuthor(`URBAN DICO : ${word}`)
                        .setDescription(stripIndents`**Definition:** ${definition || "aucune def"})
                        **Example:** (${example || "aucun exemple"}`)
                        .setFooter(`Auteur: ${author} || "inconnu"}`)
            })
        } catch(e) {

        }
    message.channel.stopTyping();




};

module.exports.help = {
    name: 'def'
};

