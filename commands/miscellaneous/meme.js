const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');

module.exports = {
    name: "meme",
    aliases: ["mem", "maime", "maim"],
    category:"miscellaneous",
    description:"generates meme from reddit",
    timeout: 5000,
    usage: "meme",
    run: async (client, message, args) => {

        let reddit = [
            "memes",
            "dankmemes",
            "Animemes",
            "MemeEconomy",
            "PrequelMemes"
        ]


        let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];

        await message.channel.startTyping();

        randomPuppy(subreddit).then(url => {
            snekfetch.get(url).then(async res => {
                await message.channel.send({
                    files: [{
                        attachment: res.body,
                        name: 'meme.png'
                    }]
                }).then(() => message.channel.stopTyping());
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));

        message.channel.stopTyping()
    }
};


