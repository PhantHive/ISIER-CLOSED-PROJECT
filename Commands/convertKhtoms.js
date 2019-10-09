const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    var m = args[0];
    if (isNaN(m) ) {
        message.reply("Ceci n'est pas un nombre.")
    }
    else {
        var r = m / 3.6
    }
    message.channel.send(`**${m} bar** ==> **${r} Pa **(operation effectue: ${m} * 10^5)`)
};

module.exports.help = {
    name: 'khToms'
};

