const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A category must have a title'],
        lowercase: true,
        unique: true
    },

    image: {
        type: String,
        required: [true, 'A category must have an image']
    },

    description: {
        type: String,
        required: [true, 'A category must have a description']
    },

    onlyjio:{
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('Category', categorySchema);