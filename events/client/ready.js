module.exports = (client) => {
    const memberSize = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    const activity = ["`${memberSize} ipsaliens :)`",
                    "---> !!aide"]

    console.log(`${client.user.username} connected`)

    setInterval(() => {
        const index = Math.floor(Math.random() * (activity.length - 1));
        console.log(index);
        client.user.setActivity(activity[index], {type: 'WATCHING', name:"To you"}); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.

};