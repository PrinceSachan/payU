const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:paytm1234@cluster0.mwqoyh4.mongodb.net/")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 20
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    },

    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema)
const Account = mongoose.model('Account', accountSchema)
module.exports = { User, Account }