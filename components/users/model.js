const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: { 
        type: String,
        required: true 
    },
    password: { 
        type: String, 
        required: true
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'] // QUITAR ADMIN PARA EVITAR QUE PUEDAN CREAR SU
    }
});
module.exports = mongoose.model('User', UserSchema);
