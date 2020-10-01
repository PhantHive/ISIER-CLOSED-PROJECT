const { Kayn } = require("kayn");

const kayn = Kayn(process.env.RIOT_LOL_API_KEY)({
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
})


module.exports.run = async(client, message, args) => {

    const spectate = kayn.CurrentGame.by.summonerID(args[0])
    FeaturedGames.list()
    console.log(championsRotate);
    
    
};

module.exports.help = {
    name: "lolchamps"
};