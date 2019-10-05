const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');

module.exports.run = async(client, message, args, ) => {
    var parts = message.content.split(" ");

    function image(message, parts) {
        var search = parts.slice(1).join(" ");

        var options = {
            url: "https://www.metacrawler.com/serp?q=" + search,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        };
        request(options, function (error, response, responsesBody) {
            if (error) {
                return;
            }

            $ = cheerio.load(responsesBody);
            var links = $(".image a.link");

            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

            if (!urls.length) {
                return;
            }

            message.channel.send(urls[~~(Math.random()*5)]);
        });
    }
};

module.exports.help = {
    name:"image"
};