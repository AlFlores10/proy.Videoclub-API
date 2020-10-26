const express = require('express'); // IMPORTA EXPRESS
const cors = require('cors');
const app = express();
app.use(cors()); // USO CORS



let double = require('./modules.js')
let result = double(3);

console.log(result);
console.log("hola mundo", process.argv[2]);

app.listen(3000, ()=> { // INICIANDO SERVIDOR NODE
    console.log('Servidor levantado en 3000 ms');
});

app.get('/', (req, res)=> {
    res.send('<h1>proy.Videoclub-API Version 1.0.0</h1>')
});
