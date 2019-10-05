const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {

    let msg = await message.channel.send("Je cherche mon ami... ;)")
    let {body} = await superagent
    .get(`https://giphy.com/search/anime`);
    console.log(body.url);

    if (!{body}) return message.channel.send("je me suis perdu dans l\'Internet, refait la commande")

};


module.exports.help = {
    name:"image"
};