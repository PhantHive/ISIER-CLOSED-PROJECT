const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    
    ID: String,
    serverID: String,
    foundEaster: Number

});


module.exports = mongoose.model('EasterSystem', guildSchema);