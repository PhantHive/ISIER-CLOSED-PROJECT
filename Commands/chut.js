const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const rando_imgs = [
        './chut/chut1.jpg',
        './chut/chut2.jpg',
        './chut/chut3.jpg',
        './chut/chut4.jpg',
        './chut/chut5.jpg',
        './chut/chut6.jpg',
        './chut/chut7.jpg',
        './chut/chut8.png',
        './chut/chut9.jpg',
        './chut/chut10.jpg',
        './chut/chut11.jpg',
        './chut/chut12.jpg'
    ];

    message.channel.send({
        file: rando_imgs[Math.floor(Math.random() * rando_imgs.length * 2)]
    });
};


module.exports.help = {
    name:"chut"
};