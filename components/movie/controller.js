const Movie = require ('./model.js');

module.exports.getMovies = async (req, res) => {
    try {
        const dataFilms = await Movie.find();
        res.json(dataFilms);
    }
    catch (error) {
        res.status(500).send({
            message: 'La película no ha sido encontrada'
        });
    }
};


module.exports.findMovies = async (req, res) => { 
    try {
        const titleFilm = await Movie.find({ title: req.params.title });
        res.json({
            message: titleFilm
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'La pelicula no ha sido encontrada'
        });
    }
};


module.exports.modifyMovies = async (req, res) => {  // MODIFICAR PELICULA //
    try {
        // const usuarioModificado = await User.findById(req.body._id);
        const filmModificado = await Movie.findOne({ _id: req.body._id });
        filmModificado.description = req.body.description;
        await filmModificado.save();
        res.json({
            message: filmModificado
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'La pelicula no ha podido modificarse correctamente'
        });
    }

};


module.exports.insertMovies = async (req, res) => {  // INSERTAR PELICULA //
    const { title, duration, category, description} = req.body;
    try {
        const newFilm = new Movie({ title, duration, category, description });
        await newFilm.save();
        res.json({
            message: newFilm
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'La pelicula no ha podido crearse correctamente'
        });
    }
};


module.exports.borraMovies = async (req, res) => { // BORRAR PELICULA //
    try {
        // const borraUsuario = await User.deleteOne(req.query.id);
        const borraFilm = await Movie.findByIdAndRemove(req.query._id);
        res.json({
            message: borraFilm
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'La pelicula no ha podido borrarse correctamente'
        });
    }
};

