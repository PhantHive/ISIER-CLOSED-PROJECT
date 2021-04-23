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

        // url Async requesting function
        function httpGetAsync(theUrl, callback)
        {
            // create the request object
            var xmlHttp = new XMLHttpRequest();

            // set the state change callback to capture when the response comes in
            xmlHttp.onreadystatechange = function()
            {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                {
                    callback(xmlHttp.responseText);
                }
            }

            // open as a GET call, pass in the url and set async = True
            xmlHttp.open("GET", theUrl, true);

            // call send with no params as they were passed in on the url string
            xmlHttp.send(null);

            return callback;
        }

        // callback for the top 8 GIFs of search
        function tenorCallback_search(responsetext)
        {
            // parse the json response
            var response_objects = JSON.parse(responsetext);

            let index = Math.floor(Math.random() * response_objects["results"].results.length);
            // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)

            return response_objects["results"][index]["media"][0]["nanogif"]["url"];

        }

        let tenorUrl = `https://api.tenor.com/v1/search?q=animeslap&key=NT23U13IZ0AH&limit=10&MediaFilter=tinygif`
        let response = await fetch(tenorUrl);


        let gifToEmbed = httpGetAsync(tenorUrl,tenorCallback_search);

        const embed = new MessageEmbed()
            .setColor('ORANGE')
            .setTitle(`I SLAP U |`)
            .setImage(gifToEmbed)
            .setDescription(`<@${message.author.id}> slap ${args[0]}`);
        await message.channel.send(embed);



    }

}