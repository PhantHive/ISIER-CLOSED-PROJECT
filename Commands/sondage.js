const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(args.length < 1) {return}

    let sondageEmbed = new Discord.RichEmbed()
        .setTitle("SONDAGE")
        .setDescription(args.join(" "));

    let sondageMessage = await message.channel.send(sondageEmbed);
    await sondageMessage.react('👍');
    await sondageMessage.react('👎');

    const filter = (reaction) => reaction.emoji.name === '👍' || reaction.emoji.name === '👎'
    const results = await sondageMessage.awaitReactions(filter, {
        time: 86400000
    });

    let resultsEmbed = new Discord.RichEmbed()
        .setTitle("Resultat du sondage:")
        .setDescription(`Resultats: ${args.join(" ")}`)
        .addField("👍: ", ` ${results.get('👍').count-1}`)
        .addField("👍: ", ` ${results.get('👎').count - 1}`)
    client.channels.get('613749495716642818').send(resultsEmbed);
};


module.exports.help = {
    name: "sondage"
};