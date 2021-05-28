const { join } = require("path");


module.exports =  {
    name:"coordo",
    aliases: ["cordo"],
    category:"studenthelp",
    description:"give lesson about physics",
    timeout: 120000,
    usage:"pyaide",
    run: async(client,message) => {
        message.channel.startTyping();
        message.channel.send('✍️').then(m => m.delete(1000))
        message.channel.send({files: [join(__dirname, "../ressources/aero1Sources/fiche/physique/CoordoPh111.pdf")]})
        message.channel.stopTyping();
    }

};
