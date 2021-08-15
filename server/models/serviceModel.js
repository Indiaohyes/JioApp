const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A service must have a title'],
        unique: true
    },

    category: {
        type: String,
        required: [true, 'A service must have a category'],
        enum: []
    },

    summary: {
        type: String,
        required: [true, 'A service must have a summary']
    },

    description: {
        type: String,
        required: [true, 'A service must have a description']
    },

    images: {
        type: String,
        validate: {
            message: 'A service must have atleast one image',
            validator: val => Boolean(val?.length)
        }
    },

    slug: {
        type: String,
        index: true
    }
});

module.exports = mongoose.model('Service', serviceSchema);