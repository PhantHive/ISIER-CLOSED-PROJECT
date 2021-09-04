const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    userId: String,
    ipsaMail: String

});

module.exports = mongoose.model('mailsystems', guildSchema);