const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    
    ID: String,
    serverID: String,
    thanksEaster: Number,
    loveEaster: Number

});


module.exports = mongoose.model('EasterSystem', guildSchema);