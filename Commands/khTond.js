const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    var m = args[0];
    if (isNaN(m) ) {
        message.reply("Ceci n'est pas un nombre.")
    }
    else {
        var r = m  / 1.852
    }
    message.channel.send(`**${m} km/h** ==> **${r} nd **(operation effectue: ${m} / 1,852)`)
};

module.exports.help = {
    name: 'ndTokh'
};

