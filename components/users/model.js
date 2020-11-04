const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: { 
        type: String 
    },
    password: { 
        type: String 
    },
    role: {
        type: String, enum: ['user', 'admin'], default: ['user']
    }
});
module.exports = mongoose.model('User', UserSchema);
