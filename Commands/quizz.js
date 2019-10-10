const Manager = require("quizz").GameManager;
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    NOTIFY_CHANNEL = bot.channels.find('id', '631964829560602649');
    if (!NOTIFY_CHANNEL) return ;

    var m = new Manager()
        m.start()

};


module.exports.help = {
    name: 'quizz'
};