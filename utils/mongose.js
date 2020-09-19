const mongose = require('mongose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };

        mongose.connect('mongodb+srv://PhantHive:oywyits5omlasjafilfo@cluster0.vrloe.mongodb.net/<dbname>?retryWrites=true&w=majority', dbOptions);
        mongose.set('useFindAndModify', false);
        mongose.Promise = global.Promise;
    }

}