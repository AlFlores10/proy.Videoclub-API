const mongoose = require('mongoose');

const PedidosSchema = new mongoose.Schema({

    userId: { 
        type: ObjectId, ref: 'User'
    },
    movieId: { 
        type: ObjectId, ref: 'Movie' 
    },
    creacion: { 
        type: Date, default: Date 
    },
    fechaDevolucion: {
        type: Date
    }

});
module.exports = mongoose.model('Pedido', PedidosSchema);
