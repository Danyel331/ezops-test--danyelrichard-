const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    messages: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('User' , UserSchema);

module.exports = User;