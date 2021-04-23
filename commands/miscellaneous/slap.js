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

        let url = `https://api.tenor.com/v1/search?q=animeslap&key=NT23U13IZ0AH&limit=10&MediaFilter=tinygif`
        let response = await fetch(url);
        let result = await response.json();
        console.log(result)
        let index = Math.floor(Math.random() * result.results.length);

        const embed = new MessageEmbed()
            .setColor('ORANGE')
            .setTitle(`I SLAP U |`)
            .setImage(result.results[index].url)
            .setDescription(`<@${message.author.id}> slap ${args[0]}`);
        await message.channel.send(embed);



    }

}