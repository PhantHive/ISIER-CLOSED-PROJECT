const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    var m = args[0];
    if (isNaN(m))  {
        message.reply("ceci n'est pas un nombre")
    }
    else {
        r = m * 100000
    }

};

module.exports.help = {
    name: 'barTopa'
};

