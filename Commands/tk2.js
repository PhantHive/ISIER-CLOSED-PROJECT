const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let pages = [
        '```py\n' +
        '#CREATION D UN LABEL C EST PARTI!\n\n' +
        'lbl = Label(master, text="===").place(x=\'0\', y=\'50\') #mais que signie tout ca??\n' +
        '#Un label est une information que vous souhaitez indiquer ou bien qui peut etre indiquer apres par exemple avoir cliquer sur un boutton qui executera une fonction (calculer 2+2) et dont le resultat s\'affichera dans le label\n' +
        '#lbl est le nom attribuer a notre Label(il n\'est pas obligatoire d\'attribuer un nom a votre label ou boutton mais il en est plus judicieux afin de bien structurer votre code\n' +
        '#Label est un outil de tkinter prennant des parametres (les memes que le boutton). Je ne vous ai pas parler du .place dans le tuto precedent. le .place a la fin est une option de placement il en existe plusieurs\n\n' +
        '#place; grid ou encore pack on appel ca en programmation du Layout Management.Pour ma part j\'utilise le .place qui est selon moi le plus precis. Ainsi le place fonctionne sous forme de coordonnees x,y (mesure en pixel)'];

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