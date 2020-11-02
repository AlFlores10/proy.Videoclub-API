const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({

    field1: { 
        type: String 
    },

});
module.exports = mongoose.model('Movie', MovieSchema);


/////////////////////////// ///////////////// CREACION TABLA MONGOOSE ///////////////////////////////////////////////////

// const Movie = mongoose.model('Movie', new mongoose.Schema({
//     field1: {
//         type: String
//       }
// }));