const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({

    title: { 
        type: String,
        required: true 
    },
    duration: { 
        type: Number,
        required: true 
    },
    category: { 
        type: String,
        required: true,
        enum: ['TP', '+18'] 
    },
    description: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('Movie', MovieSchema);
