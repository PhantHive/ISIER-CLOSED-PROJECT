const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {

    superagent.get('https://nekobot.xyz/api/image')
    .query({type: 'animeface'})
    .end((err, response) => {
        msg.channel.send({file: response.body.message});
    });
};


module.exports.help = {
    name:"anime"
};