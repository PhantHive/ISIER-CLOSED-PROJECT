const Discord = require('discord.js');

module.exports =  {

    name: "kmTomiles",
    category: "conversions",
    usage: "kmTomiles",
    run: async (client, message, args) => {
        var m = args[0];
        if (isNaN(m)) {
            message.reply("Ceci n'est pas un nombre.")
        } else {
            var r = m * 0.6213712
        }
        message.channel.send(`**${m} km** ==> **${r} miles **(operation effectue: ${m} * 0,6213712)`)
    }
};



