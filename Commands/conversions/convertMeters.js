const Discord = require('discord.js');

module.exports =  {

    name: "msTokh",
    category: "conversions",
    usage: "msTokh",
    run: async (client, message, args) => {

        var m = args[0];
        if (isNaN(m)) {
            message.reply("Ceci n'est pas un nombre.")
        } else {
            var r = m * 3.6
        }
        message.channel.send(`**${m} m/s** ==> **${r} km/h **(operation effectue: ${m} x 3,6)`)
    }
};


