'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        default:'',
        trim: true,
        required: true
    },
    age: {
        type: Number,
        default: 18,
    },
    hobby:[],
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        unique: true,
        trim: true
    }
},{
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('User',User,'user_collection')