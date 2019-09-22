const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let pages = ['```yaml\ni!aide```=>Voir ce que je te propose \n ```yaml\ni!clear ```=>reservez aux modo \n ```yaml\ni!image nameOfImage```=>a venir',
        '```yaml\ni!level```=>Ton niveau :P \n ```yaml\ni!rtfm``` => read the fucking manual (liens pour voir les vacances scolaire, les modules qu\'on a etc']; //array of pages
    let page = 1;

    const embed = new Discord.RichEmbed()
        .setColor('#DB13C2')
        .setFooter(`Page ${page} / ${pages.length}`)
        .setDescription(pages[page - 1])
        .setImage('https://imgur.com/oamlctq.png')
        .setThumbnail('')
        .setTimestamp();
    message.channel.send(embed).then(msg => {

        msg.react('⏪').then(r => {
            msg.react('⏩')

            const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

            const backwards = msg.createReactionCollector(backwardsFilter, {time: 60000});
            const forwards = msg.createReactionCollector(forwardsFilter, {time: 60000});


            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page - 1]);
                embed.setFooter(`Page ${page} / ${pages.length}`);
                msg.edit(embed)
            })

            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page - 1]);
                embed.setFooter(`Page ${page} / ${pages.length}`);
                msg.edit(embed)
            })

        })

    })
};

module.exports.help = {
    name: "aide"
};