const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const {extname} = require('path')
const fetch = require('node-fetch')

module.exports = {
    name: "meme",
    aliases: ["mem", "maime", "maim"],
    category:"miscellaneous",
    description:"generates meme from reddit",
    timeout: 1500,
    usage: "meme",
    run: async (client, message) => {

        let reddit = [
            "memes",
            "dankmemes",
            "Animemes"
        ]

        let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];
        message.channel.startTyping();

        try {
            const url = await randomPuppy(subreddit);
            const res = await fetch(url);
            await message.channel.send({
                files: [{
                    attachment: res.body,
                    name: `image${extname(url)}`
                }]
            }
            ).then(() => message.channel.stopTyping()).then(() => message.react('✌️'));

        } catch(err) {
            console.error(err)
            await message.react('❌')
        }
        message.channel.stopTyping()
    }
};


