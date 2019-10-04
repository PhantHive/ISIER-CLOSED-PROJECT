const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let pages = [
        'Comment coder en python?\n\n' +
        '```py' +
        '#1-Les librairies\n' +
        '#Avant meme de coder vous devez savoir que certaines fonctions sont tres complexes et difficile a mettre en place d\'ou l\'importance des libraires. Ce sont des gros "BOOK de Fonctions" qui vous sont fournies afin de faciliter votre code' +
        '#Coder du random? trop compliquer n\'est ce pas? ca tombe bien la libraire random existe pour importer il vous suffit de taper:' +
        'import random' +
        '# il existe differente methodes d\'importation, en effet importer toute une libraire est deja un probleme en terme de performance.(Une libraire ne va rien vous couter, mais une 20aine cumuler...n\'hesiter pas a ouvrir le code de certaines libraires et prendre conscience des miliers de lignes de code contenu :P' +
        '#vous preciserai donc ce que vous souhaitez importer par exemple si je souhaite importer la fonction sinus de la libraire math:' +
        'from math import sin\n\n' +
        '#Suite page suivante ;)```'];

    let page = 1;



    const embed = new Discord.RichEmbed()
        .setColor('#DB13C2')
        .setFooter(`Page ${page} / ${pages.length}`)
        .setDescription(pages[page - 1])
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
            });

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
    name: "tk2"
};