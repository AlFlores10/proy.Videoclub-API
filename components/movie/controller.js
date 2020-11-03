const Movie = require ('./model.js');

module.exports.getMovies = async (req, res) => {

    const data = await Movie.find({});
    res.json(data);
};


module.exports.findMovies = async (req, res) => {

    const tituloPelicula = await Movie.findOne({field1: req.params.title});
    res.json(`${tituloPelicula} Ha sido ENCONTRADA con exito`);
    
};


module.exports.modifyMovies = async (req, res) => {  

    const peliculaModificada = await Movie.findOne({_id: req.body._id});
    // const pelicula = await Movie.findById(req.body._id);
    // if(!movie) return res.json({error: elemento no encontrado});

    peliculaModificada = req.body;
    await peliculaModificada.save();
    res.json(`${peliculaModificada} Ha sido MODIFICADA con exito`);
};


module.exports.insertMovies = async (req, res) => {  
    const nuevaPelicula = req.body;

    const movie = new Movie(nuevaPelicula);
    await movie.save();
    res.json(`${movie} Ha sido INTRODUCIDA con exito`);
};


module.exports.borraMovies = async (req, res) => { // BORRAR PELICULA
    const borraPelicula = await Movie.findOne({title: req.body.title});
    await borraPelicula.remove();
    res.json(`${borraPelicula} Ha sido borrada con exito`);
};
