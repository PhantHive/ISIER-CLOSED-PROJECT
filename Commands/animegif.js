const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');

module.exports.run = async(client, message, args) => {

    let reddit = [
        "AnimeGif",
        "swordartonline"];

    let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(url => {
        snekfetch.get(url).then(async res => {
            await message.channel.send({
                files: [{
                    attachment: res.body,
                    name: 'anime.gif'
                }]
            }).then(() => message.channel.stopTyping());
        }).catch(err => console.error(err));
    }).catch(err => console.error(err));
};

module.exports.help = {
    name: 'animegif'
};