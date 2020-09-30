const { Kayn } = require("kayn");

const kayn = Kayn(process.env.RIOT_LOL_API_KEY)({
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {}, // Doesn't apply to DDragon requests
    cacheOptions: {
        cache: new LRUCache({ max: 5000 }),
        timeToLives: {
            useDefault: true, // Cache DDragon by default!
        },
    },
})


module.exports.run = async(client, message, args) => {

    const championsRotate = kayn.Champion.Rotation.list();
    message.channel.send(championsRotate);
    
};

module.exports.help = {
    name: "lolchamps"
};