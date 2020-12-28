const Discord = require('discord.js');

module.exports =  {
    name: "paTobar",
    category: "conversions",
    usage: "paTobar",
    run: async (client, message, args) => {
        var m = args[0];
        if (isNaN(m)) {
            message.reply("Ceci n'est pas un nombre.")
        } else {
            var r = m * 10 ^ (-5)
        }
        message.channel.send(`**${m} pa** ==> **${r} bar **(operation effectue: ${m} * 10^(-5)`)
    }
};



