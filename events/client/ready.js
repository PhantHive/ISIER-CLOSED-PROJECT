module.exports = (client) => {

    console.log(`${client.user.username} connected`)
    const memberSize = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    client.user.setActivity(`${memberSize} ipsaliens :)`, {type: 'LISTENING', name:"To you"});

};