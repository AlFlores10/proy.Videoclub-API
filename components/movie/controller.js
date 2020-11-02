const Movie = require ('./model.js');

module.exports.getMovies = async (req, res) => {

    const data = await Movie.find({});
    res.json(data);
};


module.exports.findMovies = async (req, res) => {

    const tituloPelicula = await Movie.findOne({field1: req.params.field1});
    res.json(`${tituloPelicula} Ha sido ENCONTRADA con exito`);
    
};


module.exports.modifyMovies = async (req, res) => {  

    const peliculaModificada = await Movie.findOne({_id: req.body._id});
    // const pelicula = await Movie.findById(req.body._id);
    // if(!movie) return res.json({error: elemento no encontrado});

    peliculaModificada.field1 = req.body.field1;
    await peliculaModificada.save();
    res.json(`${peliculaModificada} Ha sido MODIFICADA con exito`);
};


module.exports.insertMovies = async (req, res) => {  
    const nuevaPelicula = req.body;

    const movie = new Movie(nuevaPelicula);
    await movie.save();
    res.json(`${movie} Ha sido INTRODUCIDA con exito`);
};





// app.get('/films/:field1', async (req, res)=> { // PAGINA DE FILMS (BUSQUEDA POR TITULO)
//     const tituloPelicula = await Movie.findOne({field1: req.params.field1});
//     res.json(`${tituloPelicula} Ha sido encontrada con exito`);
// });


// app.get('/films', async (req, res)=> { // PAGINA DE FILMS    
//     const movies = await Movie.find({});
//     res.json(movies);
// });