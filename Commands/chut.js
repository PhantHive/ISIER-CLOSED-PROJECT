const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const rando_imgs = [
        './objectionImage/objection1.jpg',
        './objectionImage/objection2.jpg',
        './objectionImage/objection3.jpg',
        './objectionImage/objection4.jpg',
        './objectionImage/objection5.jpg',
        './objectionImage/objection6.jpg',
        './objectionImage/objection7.jpg',
        './objectionImage/objection8.png',
        './objectionImage/objection9.jpg',
        './objectionImage/objection10.jpg',
        './objectionImage/objection11.jpg',
        './objectionImage/objection12.jpg'
    ];

    bulkDelete(message.author);
    message.channel.send({
        file: rando_imgs[Math.floor(Math.random() * rando_imgs.length * 2)]
    });
};


module.exports.help = {
    name:"chut"
};