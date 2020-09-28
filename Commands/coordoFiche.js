const { loadImage } = require("canvas");
const { join } = require("path");


module.exports.run = async(client, message) => {

    message.channel.startTyping();
    message.channel.send('✍️').then(m => m.delete(2000))
    message.channel.send(join(__dirname, "..", "ph11", "CoordoPh111.pdf"))
    message.channel.stopTyping();


};


module.exports.help = {
    name: "coordo"
};