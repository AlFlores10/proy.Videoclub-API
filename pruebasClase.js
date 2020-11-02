// const date = new Date();  ///////////////////////////////////// OBTENER FECHA ACTUAL  ///////////////////////////
// date.getDate();

// -------------------------------------------------------------------------------------
/////////////////////////////// EXPRESS (NODE FRAMEWORK) --- CORS (MODULO EXPRESS) //////////////////////////////////
// -------------------------------------------------------------------------------------

// const express = require('express'); ///////////////////////////////// IMPORTA EXPRESS ////////////////////////////
// const cors = require('cors'); //////////////////////////////////////// IMPORTA CORS //////////////////////////////
// const app = express(); //////////////////////////////////////////////// USA EXPRESS //////////////////////////////

// app.use(cors()); //////////////////////////////////////////////////////// USA CORS ///////////////////////////////
// app.use(express.json());



// --------------------------------------------------------------------------------------
//////////////////////////////////// MONGOOSE DB  (IMPORTACION - CONEXION BBDD) ////////////////////////////////////////
// --------------------------------------------------------------------------------------

// const mongoose = require('mongoose'); ////////////////////////////// IMPORTA MONGOOSE   /////////////////////////////

// mongoose.connect('mongodb://localhost:27017/db-ejemplo', { /////// CREA CONEXION CON BASE DE DATOS MONGODB /////////
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,
// useFindAndModify: false
// });

// mongoose.then(() => console.log('Mongoose funcionando'));  // SE EJECUTA SI LA PROMESA DEL METODO CONNECT SE RESUELVE BIEN
// mongoose.catch(() => console.log('Mongoose NO funcionando')); // SE EJECUTA SI LA PROMESA DEL METODO CONNECT SE RESUELVE MAL


// ----------------------------------------------------------------------------------------
/////////////////////////////////////////////////// MIDDLEWARE ///////////////////////////////////////////////////////////
// ----------------------------------------------------------------------------------------

// app.use((req, res, next) => { ///////////////////// MIDDLEWARE VALIDACION - METODO USE DE EXPRESS ////////////////////
//     console.log('Ejecutando middleware');
//     next();
// });

// const middleware2 = (req, res, next)=> {  ////////// CREA UN MIDDLEWARE COMO FUNCION PARA PODER REUTILIZARLA //////////
//     console.log('Ha pasado por aqui 2');
//     next();
// };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// AÑADIR ARCHIVOS DE UNA ARRAY EN MONGODB ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const script = async ()={
//     const arrMovies = [{...}, {...}];

//     for (let i = 0; i<arrMovies.length; i++) {
//         const movie = new movie(arrMovies[i])
//         await movie.save();
//     }
//     console.log('he terminado');
// }