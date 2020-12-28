const Discord = require('discord.js');

module.exports =  {


    name: "barTopa",
    category: "conversions",
    usage: "barTopa",
    run: async (client, message, args) => {
        var m = args[0];
        if (isNaN(m)) {
            message.reply("ceci n'est pas un nombre")
        } else {
            r = m * 100000
        }
    }

};


