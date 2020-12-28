const Discord = require('discord.js');

module.exports =  {
    name:"objection",
    aliases: ["wrong", "youwrong", "non", "faux"],
    category:"miscellaneous",
    description:"send an objection pic",
    timeout: 25000,
    usage:"objection",
    run: async(client,message) => {
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


        await message.channel.send({
            files: [
                rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
            ]
        });
    }
};
