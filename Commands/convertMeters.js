const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    m = args[1];
    if (isNaN(m) ) {
        message.reply("Ceci n'est pas un nombre.")
    }
    else {
        r = m * 3.6
    }
    message.channel.send(`**${m} m/s** ==> **${r} km/h **(operation effectue: ${m} x 3,6`)
};

module.exports.help = {
    name: 'msTokh'
};

