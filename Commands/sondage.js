const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
   try{
       const embed = new Discord.RichEmbed()
           .setTitle(args.join(" "))
           .setColor("orange")
           .setImage('https://imgur.com/lNI3l4H');
       const pollTitle = await message.channel.send({embed});
       await pollTitle.react("👍";
       await pollTitle.react("👎");

       const filter = reaction => reaction.emoji.name === "👍";
       const collector = pollTitle.createReactionCollector(filter, {
           time:  20000//3600000

       });
       collector.on("collect", r => console.log(`${r.emoji.name}`));
       collector.on("end", collected => member.guild.channels.get('613749495716642818')).send(`Nombre total de reponse collecte: ${collected.size} 👍`);

       const filter1 = reaction => reaction.emoji.name === "👎";
       const collector1 = pollTitle.createReactionCollector(filter1, {
           time: 3600000

       });
       collector1.on("collect", r => console.log(`${r.emoji.name}`));
       collector1.on("end", collected => member.guild.channels.get('613749495716642818')).send(`Nombre total de reponse collecte: ${collected.size} 👎`);


   } catch (error) {
       console.log(error)
   }

};


module.exports.help = {
    name: "sondage"
};