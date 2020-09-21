const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ID: String,
    XP: Number,
    LEVEL: Number


});

module.exports = mongoose.model('RankSystem', guildSchema);