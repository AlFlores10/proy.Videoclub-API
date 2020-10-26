const express = require('express'); // IMPORTA EXPRESS
const cors = require('cors'); // IMPORTA CORS
const app = express(); // USA EXPRESS
app.use(cors()); // USA CORS



let double = require('./modules.js')
let result = double(3);

console.log(result);
console.log("hola mundo", process.argv[2]);

// -----------------------------------------------------------------------
const carteleraPeliculas = [
    { id: 1, titulo: 'Matrix'},
    { id: 2, titulo: 'American Gangster'},
    { id: 3, titulo: 'Los Juegos del Hambre'},
    { id: 4, titulo: 'Monstruos S.A.'},
]

// --------------------------------------------------------------------

app.listen(3000, ()=> { // INICIANDO SERVIDOR NODE
    console.log('Servidor levantado en 3000 ms');
});


// -----------------------------------------------------------------------
app.get('/', (req, res)=> { // PAGINA DE INICIO
    res.send('<h1>proy.Videoclub-API Version 1.0.0</h1>')
});


// --------------------------------------------------------------------------
app.get('/users', (req, res)=> { // PAGINA DE USUARIOS
    res.send('USUARIOS')
});


// -----------------------------------------------------------------------------
app.get('/films', (req, res)=> { // PAGINA DE FILMS
    res.json(carteleraPeliculas);
});


app.get('/films/id/:id', (req, res)=> { // PAGINA DE FILMS (BUSQUEDA POR ID)
    const id = req.params.id;
    let peliculaElegida = carteleraPeliculas.find(peliculaElegida => peliculaElegida.id == id);
    res.json(peliculaElegida);
});


app.get('/films/titulo/:titulo', (req, res)=> { // PAGINA DE FILMS (BUSQUEDA POR TITULO)
    const titulo = req.params.titulo;
    let tituloElegido = carteleraPeliculas.find(tituloElegido => tituloElegido.titulo == titulo);
    res.json(tituloElegido);
});


// ------------------------------------------------------------------------------
app.get('/pedidos', (req, res)=> { // PAGINA DE PEDIDOS
    res.send('PEDIDOS')
});


// -----------------------------------------------------------------------------
