const Movie = require ('./model.js');

module.exports.getMovies = async (req, res) => { // BUSQUEDA TODAS LAS PELICULAS //

    const data = await Movie.find({});
    res.json(data);
};


module.exports.findMovies = async (req, res) => { // BUSCAR PELICULA //

    const tituloPelicula = await Movie.findOne({title: req.params.title});
    res.json(`${tituloPelicula.title} Ha sido ENCONTRADA con exito`);
};


module.exports.modifyMovies = async (req, res) => {  // MODIFICAR PELICULA //

    const peliculaModificada = await Movie.findOne({_id: req.body._id});
    // const pelicula = await Movie.findById(req.body._id);
    // if(!movie) return res.json({error: elemento no encontrado});

    peliculaModificada.title = req.body.title;
    peliculaModificada.duration = req.body.duration;
    peliculaModificada.category = req.body.category;

    await peliculaModificada.save();
    res.json(`${peliculaModificada} Ha sido MODIFICADA con exito`);
};


module.exports.insertMovies = async (req, res) => {  // INSERTAR PELICULA //
    const nuevaPelicula = req.body;

    const movie = new Movie(nuevaPelicula);
    await movie.save();
    res.json(`${movie} Ha sido INTRODUCIDA con exito`);
};


module.exports.borraMovies = async (req, res) => { // BORRAR PELICULA //
    const borraPelicula = await Movie.deleteOne(req.query.id);
    res.json(`${borraPelicula} Ha sido borrada con exito`);
};
