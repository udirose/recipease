const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    name:{
        type: String,
        required: false,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{ collection : 'users' })

module.exports = mongoose.model('users',signupSchema)