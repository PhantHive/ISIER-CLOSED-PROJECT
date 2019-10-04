const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let pages = [
        'Comment coder en python?\n\n' +
        '```py\n' +
        '#1-Les librairies\n' +
        '#Avant meme de coder vous devez savoir que certaines fonctions sont tres complexes et difficile a mettre en place d\'ou l\'importance des libraires. Ce sont des gros "BOOK de Fonctions" qui vous sont fournies afin de faciliter votre code' +
        '#Coder du random? trop compliquer n\'est ce pas? ca tombe bien la libraire random existe pour importer il vous suffit de taper:\n\n' +
        'import random' +
        '# il existe differente methodes d\'importation, en effet importer toute une libraire est deja un probleme en terme de performance.(Une libraire ne va rien vous couter, mais une 20aine cumuler...n\'hesiter pas a ouvrir le code de certaines libraires et prendre conscience des miliers de lignes de code contenu :P' +
        '#vous preciserai donc ce que vous souhaitez importer par exemple si je souhaite importer la fonction sinus de la libraire math:\n' +
        'from math import sin\n\n' +
        '#Suite page suivante ;)```',
        'FONCTIONS:\n' +
        '```py\n' +
        'import random\n' +
        'from math import sin\n' +
        'def trueee():\n' +
        '    a = random.randrange(1,100)\n' +
        '    print(a + sin(a))\n' +
        '    \n' +
        'trueee()```\n\n' +
        '```yaml\n' +
        'Ici on a defini une fonction *def* on lui a attribue un nom: jeSuisUneFonction et aucun parametre *()* => parenthese vide *:* permet de clore la definition de la fonction\n'+
        'on a importer au prealable 2 libraires ou plutot une libraire et un module d\'une autre libraire (math) enfin il vous reste plus qu\'a coder votre fonction en respectant la syntaxe python :P```'+
        '\n\nvoir tutoriel py2 : i!py2'];

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