const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {

    name: "owo",
    aliases: ["owo"],
    timeout: 20000,
    category: "miscellaneous",
    description: "owo",
    usage: "owo",
    run: async (client, message, args) => {

        let tenorUrl = `https://api.tenor.com/v1/search?q=owo&key=NT23U13IZ0AH&limit=20`
        let response = await fetch(tenorUrl);
        let jsonResults = await response.json()
        let index = Math.floor(Math.random() * jsonResults.results.length);

        await message.channel.send({ files: [jsonResults.results[index].media[0].mediumgif.url] });



    }

}