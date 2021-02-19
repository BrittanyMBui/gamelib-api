const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/gamelib';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,

})
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log(err));

module.exports = {
    Game: require('./Game'),
};