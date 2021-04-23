const { MessageEmbed } = require('discord.js');
const Tenor = require("tenorjs").client({
    "Key": "NT23U13IZ0AH" // https://tenor.com/developer/keyregistration
});

module.exports = {

    name: "slap",
    aliases: ["claque"],
    timeout: 60000,
    category: "miscellaneous",
    description: "slap someone",
    usage: "slap",
    run: async (client, message, args) => {


        Tenor.Search.Random("slap", "1").then(Result => {
            const result = Result.url;
            const embed = new MessageEmbed()
                .setColor('ORANGE')
                .setTitle(`I SLAP U |`)
                .setThumbnail(result)
                .setDescription(message.author.username + " slap " + args[0]);
            message.channel.send(embed)
        }).catch(console.error);


    }

}