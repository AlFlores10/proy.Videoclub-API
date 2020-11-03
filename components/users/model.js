const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    nombre: { 
        type: String 
    },
    contrasenya: { 
        type: String 
    },
    role: {
        type: String, enum: ['user', 'admin'], default: ['user']
    }
});
module.exports = mongoose.model('User', UserSchema);
