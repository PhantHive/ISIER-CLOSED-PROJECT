const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let pages = [
        '\n`i!aide`=>Voir ce que je te propose \n' +
        '\n`i!aidemodo `=>reservez aux modo \n' +
        '\n`i!sondage [question] ou i!sondage "question1" "choixA" "choixB"... ` => crée un sondage\n' +
        '\n`i!rang` => Permet de connaitre votre rang (level + xp + progression) \n ' +
        '\n`i!miseXp [@unePersonne] [combien]` => Ppour miser de l\'Xp \n' +
        '\n`i!pyaide`=> Aide pour python \n  ' +
        '\n`i!tkaide` => Aide à tkinter \n ' +
        '\n`i!pyCo` => Connaissance python à avoir\n ' +
        '\n`i!DL` => affiche les DL usuel en 0 (physique)\n',
        //========================================================================
        '\n`i!coordo`=> Fiche coordo ph111\n ' +
        '\n`i!algo`=> Entrainement hexa/binaire\n' +
        '\n`i!chut```=> vous en avez marre?\n ' +
        '\n`i!objection` => vous n\'etes pas d\'accord? \n ' +
        '\n`i!frToen <\mot\>` => Vous traduit un mot francais vers l\'anglais\n' +
        '\n`i!msTokh nombre\n` => vous permet de convertir des m/s en km/h (i!khToms fais l inverse) \n ' +
        '\n`i!khTond nombre`\n => convertit des km/h en noeud (i!ndTokh fais l\'inverse)\n ' +
        '\n`i!paTobar nombre` => convertit des pascal en bar (i!barTopa fais l\'inverse)\n'+
        '\n`i!kmTomiles nombre`\n => convertit des kilometre en miles (i!milesTokm fais l\'inverse) \n'
    ]; //array of pages

    let page = 1;

    const embed = new Discord.RichEmbed()
        .setColor('#DB13C2')
        .setDescription(pages[page - 1])
        .setImage('https://imgur.com/N8FhelH.png')
        .setThumbnail('')
        .setFooter(`Page ${page} / ${pages.length}, demander par:`, message.author.avatarURL)
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