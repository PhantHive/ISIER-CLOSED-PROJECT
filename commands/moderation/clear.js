const Discord = require('discord.js');

module.exports =  {
    name:"clear",
    aliases: ["swallow", "prune", "purge", "clean"],
    category:"moderation",
    description:"clear messages",
    timeout: 5500,
    usage:"clear",
    run: async(client,message, args) => {
        //if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("tu n'as pas la permission").catch(console.log);
        if (!args[0]) return message.channel.send("indiquer un nombre de messages");

        if (isNaN(args[0])) return message.channel.send("indiquer un nombre");

        await message.channel.bulkDelete(args[0]);
    }

};

