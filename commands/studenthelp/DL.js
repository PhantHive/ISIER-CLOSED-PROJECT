const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const Embed = new Discord.MessageEmbed()
        .setTitle("Developpements limites usuels en 0")
        .setImage('https://imgur.com/yhjOVER.jpg')
        .setFooter("source: http://www.h-k.fr/publications/data/adc.ps__annexes.maths.pdf");
    await message.channel.send(Embed);
};

module.exports.help = {
    name:"dl"
};