const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };

        mongoose.connect('key', dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected!');
        });

        mongoose.connection.on('err', err => {
            console.error(`Mongoose error connection \n ${err.stack}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('Mongoose connection lost');
        });
    }

}