const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {

    name: "slap",
    aliases: ["claque"],
    timeout: 20000,
    category: "miscellaneous",
    description: "slap someone",
    usage: "slap",
    run: async (client, message, args) => {

        const url = `https://api.tenor.com/v1/search?q=slap&key=NT23U13IZ0AH&limit=10`
        const response = await fetch(url);
        const result = await response.json();
        const index = Math.floor(Math.random() * result.results.length);

        const embed = new MessageEmbed()
            .setColor('ORANGE')
            .setTitle(`I SLAP U |`)
            .setImage(result.results[index].url)
            .setDescription(`<@${message.author.id}> slap ${args[0]}`);
        await message.channel.send(embed);



    }

}