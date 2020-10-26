let double = require('./modules.js')
let result = double(3);

console.log(result);
console.log("hola mundo", process.argv[2]);

const express = require('express'); // IMPORTA EXPRESS
const cors = require('cors');
const app = express();
app.use(cors()); // USO CORS