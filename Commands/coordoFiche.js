const { join } = require("path");


module.exports.run = async(client, message) => {

    message.channel.startTyping();
    message.channel.send('✍️').then(m => m.delete(2000))
    message.channel.send({file: join(__dirname, "..", "aero1Sources", "fiche", "physique", "CoordoPh111.pdf")})
    message.channel.stopTyping();


};


module.exports.help = {
    name: "coordo"
};