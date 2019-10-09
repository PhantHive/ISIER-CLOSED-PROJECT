const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    var def = urban(args[0]);
    message.channel.startTyping();
    message.channel.send(`la definition du mot ${def} est: ***${def}`)
};

module.exports.help = {
    name: 'def'
};

