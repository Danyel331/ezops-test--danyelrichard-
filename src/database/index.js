const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testebd', true );
mongoose.Promise = global.Promise;

module.exports = mongoose;