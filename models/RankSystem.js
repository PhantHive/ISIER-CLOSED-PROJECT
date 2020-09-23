const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    
    ID: String,
    XP: Number,
    LEVEL: Number,
    RANK: Number


});

module.exports = mongoose.model('RankSystem', guildSchema);