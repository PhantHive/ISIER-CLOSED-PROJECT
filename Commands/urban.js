const Discord = require('discord.js');
const urban = require('urban');

module.exports.run = async (client, message, args) => {
    var def = urban(args[0]);

    def.first(function (json) {
        console.log(json);
    });
    message.channel.startTyping();

    message.channel.send(`la definition du mot ${def} est: ***${def}`)

    message.channel.stopTyping();
};

module.exports.help = {
    name: 'def'
};

