const Discord = require("discord.js");

module.exports =  {
    name:"DL",
    aliases: ["dl"],
    category:"studenthelp",
    description:"give \"developpement limité usuels en 0\"",
    timeout: 120000,
    usage:"DL",
    run: async(client, message) => {
        const Embed = new Discord.MessageEmbed()
            .setTitle("Developpements limites usuels en 0")
            .setImage('https://imgur.com/yhjOVER.jpg')
            .setFooter("source: http://www.h-k.fr/publications/data/adc.ps__annexes.maths.pdf");
        await message.channel.send(Embed);
    }
};

