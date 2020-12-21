const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let pages = ['`i!aide`=>Voir ce que je te propose \n `i!aidemodo `=>reservez aux modo \n `i!sondage [question] ou i!sondage "question1" "choixA" "choixB"... ` => crée un sondage\n',
        '`i!rang` => Permet de connaitre votre rang (level + xp + progression) \n `i!miseXp [@unePersonne] [combien]` => Ppour miser de l\'Xp \n' ,
        '`i!pyaide`=> Aide pour python \n  `i!tkaide` => Aide à tkinter \n `i!pyCo` => Connaissance python à avoir\n `i!DL` => affiche les DL usuel en 0 (physique)\n',
        '`i!coordo`=> Fiche coordo ph111\n `i!algo`=> Entrainement hexa/binaire\n',
        '`i!chut```=> vous en avez marre?\n `i!objection` => vous n\'etes pas d\'accord? \n `i!frToen <\mot\>` => Vous traduit un mot francais vers l\'anglais\n',
        '`i!msTokh nombre\n` => vous permet de convertir des m/s en km/h (i!khToms fais l inverse) \n `\n i!khTond nombre`\n => convertit des km/h en noeud (i!ndTokh fais l\'inverse)\n `i!paTobar nombre` => convertit des pascal en bar (i!barTopa fais l\'inverse)',
        '`i!kmTomiles nombre`\n => convertit des kilometre en miles (i!milesTokm fais l\'inverse) \n']; //array of pages
    let page = 1;

    const embed = new Discord.RichEmbed()
        .setColor('#DB13C2')
        .setFooter(`Page ${page} / ${pages.length}`)
        .setDescription(pages[page - 1])
        .setImage('https://imgur.com/N8FhelH.png')
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