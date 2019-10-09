const Discord = require('discord.js');
const urban = require('urban');

module.exports.run = async (client, message, args) => {
    var mot = args[0];
        def = urban(mot);

    def.first(function (json) {
        console.log(json);
    });

    message.channel.startTyping();

    message.channel.send(`la definition du mot ${mot} est: ***${def}`)

    message.channel.stopTyping();
};

module.exports.help = {
    name: 'def'
};

