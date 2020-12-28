const Discord = require('discord.js');

module.exports =  {

    name: "khToms",
    category: "conversions",
    usage: "khToms",
    run: async (client, message, args) => {
        var m = args[0];
        if (isNaN(m) ) {
            message.reply("Ceci n'est pas un nombre.")
        }
        else {
            var r = m / 3.6
        }
        message.channel.send(`**${m} km/h** ==> **${r} m/s **(operation effectue: ${m} * 10^5)`)
    }

};



