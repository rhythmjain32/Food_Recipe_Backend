const mongoose = require('mongoose');

const Recipe = mongoose.model('Recipe', {
    title: {
        type: String,
        required: true,
    },

    ingredients: [{
        type: String,
        required: true
    }],

    instructions: {
        type: String,
        required: false
    },

    chef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});


module.exports = Recipe