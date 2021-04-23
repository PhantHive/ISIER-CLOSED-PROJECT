const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {

    name: "slap",
    aliases: ["slap"],
    timeout: 20000,
    category: "miscellaneous",
    description: "slap someone",
    usage: "slap",
    run: async (client, message, args) => {



        let tenorUrl = `https://api.tenor.com/v1/search?q=animeslap&key=NT23U13IZ0AH&limit=30`
        let response = await fetch(tenorUrl);
        let jsonResults = await response.json()
        let index = Math.floor(Math.random() * jsonResults.results.length);
        let taggedUser;
        if (args[0] === undefined) {
            taggedUser = "**himelf/herself**"
        }
        else {
            taggedUser = args[0]
        }


        const embed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`| I SLAP U |`)
            .setImage(jsonResults.results[index].media[0].mediumgif.url)
            .setDescription(`<@${message.author.id}> **slap** ${taggedUser}`);
        await message.channel.send(embed);



    }

}