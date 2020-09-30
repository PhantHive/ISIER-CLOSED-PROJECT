const { Kayn } = require("kayn");

const kayn = Kayn(process.env.RIOT_LOL_API_KEY);


module.exports.run = async(client, message, args) => {

    kayn.DDragon.Champion.list()
        .callback(function(error, champions) {
            message.channel.send(champions)
        })
 

};

module.exports.help = {
    name: "lolchamps"
};