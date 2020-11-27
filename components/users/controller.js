const User = require('./model.js');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');

module.exports.getUsers = async (req, res) => {
    try {
        const data = await User.find({});
        res.json(data);

    } catch (error) {

        console.log(error);
        res.status(500).send({
            message: 'El usuario no ha sido encontrado'
        });
    }

};


module.exports.findUser = async (req, res) => { // BUSCAR USUARIO
    try {
        const nombreUsuario = await User.findOne({ name: req.params.name });
        res.json(`${nombreUsuario.name} Ha sido ENCONTRADO con exito`);

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'El usuario no ha sido encontrado'
        });
    }
};


module.exports.modifyUser = async (req, res) => {  // MODIFICAR USUARIO
    try {
        const usuarioModificado = await User.findOne({ _id: req.body._id });
        // const pelicula = await Movie.findById(req.body._id);
        // if(!movie) return res.json({error: elemento no encontrado});

        usuarioModificado.name = req.body.name;
        usuarioModificado.password = req.body.password;
        usuarioModificado.role = req.body.role;

        await usuarioModificado.save();
        res.json(`${usuarioModificado} Ha sido MODIFICADO con exito`);

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'El usuario no ha podido modificarse correctamente'
        });
    }

};


module.exports.insertUser = async (req, res) => {  // NUEVO USUARIO
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const nuevoUsuario = req.body;
    try {
        const newUser = new User(nuevoUsuario);
        await newUser.save();
        res.json(`${newUser} Ha sido INTRODUCIDO con exito`);

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'El usuario no ha podido crearse correctamente'
        });
    }
};


module.exports.borraUser = async (req, res) => { // BORRAR USUARIO
    try {
        const borraUsuario = await User.deleteOne(req.query.id);
        res.json(`${borraUsuario} Ha sido borrado con exito`);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'El usuario no ha podido borrarse correctamente'
        });
    }
};
