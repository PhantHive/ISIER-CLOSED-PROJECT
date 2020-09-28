const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const args = message.content.match(/".+?"/g).map(str => str.replace(/"/g, ''));


    if(args.length > 1) {

        if (args.length == 3) {
            let sondageEmbed = new Discord.RichEmbed()
                .setTitle("SONDAGE- CHOIX MULTIPLES")
                .setDescription(args[0])
                .addField('choix A' , args[1])
                .addField('choix B' , args[2])
            

            let sondageMessage = await message.channel.send(sondageEmbed);
                await sondageMessage.react('🇦');
                await sondageMessage.react('🇧');

        }

        else if (args.length == 4) {
            let sondageEmbed = new Discord.RichEmbed()
                .setTitle("SONDAGE- CHOIX MULTIPLES")
                .setDescription(args[0])
                .addField('choix A' , args[1])
                .addField('choix B' , args[2])
                .addField('choix C' , args[3])
            

            let sondageMessage = await message.channel.send(sondageEmbed);
                await sondageMessage.react('🇦');
                await sondageMessage.react('🇧');
                await sondageMessage.react('🇨');
                
        }

        else if (args.length == 5) {

            let sondageEmbed = new Discord.RichEmbed()
                .setTitle("SONDAGE- CHOIX MULTIPLES")
                .setDescription(args[0])
                .addField('choix A' , args[1])
                .addField('choix B' , args[2])
                .addField('choix C' , args[3])
                .addField('choix D' , args[4])
            

            let sondageMessage = await message.channel.send(sondageEmbed);
                await sondageMessage.react('🇦');
                await sondageMessage.react('🇧');
                await sondageMessage.react('🇨');
                await sondageMessage.react('🇩');
        }

        else {
            message.reply("tu ne peux pas faire un sondage avec une seul option LoL XD ptdrr.").then(m => m.delete(1000));
        }                                                                  

    }

    else {

        
        let sondageEmbed = new Discord.RichEmbed()
            .setTitle("SONDAGE")
            .setDescription(args[0]);

        let sondageMessage = await message.channel.send(sondageEmbed);
        await sondageMessage.react('👍');
        await sondageMessage.react('👎');

        const filter = (reaction) => reaction.emoji.name === '👍' || reaction.emoji.name === '👎'
        const results = await sondageMessage.awaitReactions(filter, {
            time: 864000
        });

        let resultsEmbed = new Discord.RichEmbed()
            .setTitle("Resultat du sondage:")
            .setDescription(`Resultats: ${args.join(" ")}`)
            .addField("👍: ", ` ${results.get('👍').count-1}`)
            .addField("👍: ", ` ${results.get('👎').count - 1}`)
        client.channels.get('613749495716642818').send(resultsEmbed);

    }
    
};


module.exports.help = {
    name: "sondage"
};