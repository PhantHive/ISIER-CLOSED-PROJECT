const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("tu n'as pas la permission").catch(console.log);
    if(!args[0]) return message.channel.send("indiquer un nombre de messages");

    if (isNaN(args[0])) return message.channel.send("indiquer un nombre");

    message.channel.bulkDelete(args[0]);

};

module.exports.help = {
    name: "clear"
};