const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({

    title: { 
        type: String 
    },
    duration: { 
        type: Number 
    },
    category: { 
        type: String, enum: ['TP', '+18'] 
    }

});
module.exports = mongoose.model('Movie', MovieSchema);
