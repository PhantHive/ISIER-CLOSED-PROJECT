const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {

    name: "uwu",
    aliases: ["uwu"],
    timeout: 20000,
    category: "miscellaneous",
    description: "uwu",
    usage: "uwu",
    run: async (client, message, args) => {



        let tenorUrl = `https://api.tenor.com/v1/search?q=anime-uwu&key=NT23U13IZ0AH&limit=20`
        let response = await fetch(tenorUrl);
        let jsonResults = await response.json()
        let index = Math.floor(Math.random() * jsonResults.results.length);

        await message.channel.send({ files: [jsonResults.results[index].media[0].mediumgif.url] });



    }

}