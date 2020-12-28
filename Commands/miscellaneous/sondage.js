const {MessageEmbed} = require('discord.js');

module.exports =  {

    name:"sondage",
    aliases: ["poll"],
    category:"miscellaneous",
    description:"make a poll",
    usage:"sondage",
    run: async(client, message, args) => {

        const infoPoll = message.content.match(/".+?"/g).map(str => str.replace(/"/g, ''));

        if(infoPoll.length > 1) {

            if (infoPoll.length === 3) {
                let sondageEmbed = new MessageEmbed()
                    .setTitle("SONDAGE- CHOIX MULTIPLES")
                    .setDescription(infoPoll[0])
                    .addField('choix A' , infoPoll[1])
                    .addField('choix B' , infoPoll[2])


                let sondageMessage = await message.channel.send(sondageEmbed);
                    await sondageMessage.react('🇦');
                    await sondageMessage.react('🇧');

            }

            else if (infoPoll.length === 4) {
                let sondageEmbed = new MessageEmbed()
                    .setTitle("SONDAGE- CHOIX MULTIPLES")
                    .setDescription(infoPoll[0])
                    .addField('choix A' , infoPoll[1])
                    .addField('choix B' , infoPoll[2])
                    .addField('choix C' , infoPoll[3])


                let sondageMessage = await message.channel.send(sondageEmbed);
                    await sondageMessage.react('🇦');
                    await sondageMessage.react('🇧');
                    await sondageMessage.react('🇨');

            }

            else if (infoPoll.length === 5) {

                let sondageEmbed = new MessageEmbed()
                    .setTitle("SONDAGE- CHOIX MULTIPLES")
                    .setDescription(infoPoll[0])
                    .addField('choix A' , infoPoll[1])
                    .addField('choix B' , infoPoll[2])
                    .addField('choix C' , infoPoll[3])
                    .addField('choix D' , infoPoll[4])


                let sondageMessage = await message.channel.send(sondageEmbed);
                    await sondageMessage.react('🇦');
                    await sondageMessage.react('🇧');
                    await sondageMessage.react('🇨');
                    await sondageMessage.react('🇩');
            }

            else {
                message.reply("tu ne peux pas faire un sondage avec une seul option LoL XD ptdrr.").then(m => m.delete(4000));
            }

        }

        else {


            let sondageEmbed = new MessageEmbed()
                .setTitle("SONDAGE")
                .setDescription(args[0]);

            let sondageMessage = await message.channel.send(sondageEmbed);
            await sondageMessage.react('👍');
            await sondageMessage.react('👎');

            const filter = (reaction) => reaction.emoji.name === '👍' || reaction.emoji.name === '👎'
            const results = await sondageMessage.awaitReactions(filter, {
                time: 864000
            });

            let resultsEmbed = new MessageEmbed()
                .setTitle("Resultat du sondage:")
                .setDescription(`Resultats: ${args[0].join(" ")}`)
                .addField("👍: ", ` ${results.get('👍').count-1}`)
                .addField("👍: ", ` ${results.get('👎').count - 1}`)
            client.channels.get('613749495716642818').send(resultsEmbed);

        }
    }
    
};

