const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const rando_imgs = [
        './objectionImage/objection1.gif',
        './objectionImage/objection2.jpg',
        './objectionImage/objection3.png',
        './objectionImage/objection4.gif',
        './objectionImage/objection5.jpg',
        './objectionImage/objection6.jpg',
        './objectionImage/objection7.gif',
        './objectionImage/objection8.gif',
        './objectionImage/objection9.gif',
        './objectionImage/objection10.gif',
        './objectionImage/objection11.gif',
        './objectionImage/objection12.gif',
        './objectionImage/objection13.jpg'
    ];


    message.channel.send({
        file: rando_imgs[Math.floor(Math.random() * rando_imgs.length * 2)]
    });
};


module.exports.help = {
    name:"objection"
};