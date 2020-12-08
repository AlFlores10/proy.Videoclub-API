const User = require('./model.js');
const bcrypt = require('bcryptjs');


module.exports.getUsers = async (req, res) => {
    try {
        const dataUsers = await User.find();
        res.json(dataUsers);
    }
    catch (error) {
        res.status(500).send({
            message: 'El usuario no ha sido encontrado'
        });
    }
};


module.exports.findUser = async (req, res) => { // BUSCAR USUARIO POR NAME
    try {
        const nombreUsuario = await User.find({ name: req.params.name});
            res.json({
                message: nombreUsuario
            });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'El usuario no ha sido encontrado'
        });
    }
};


module.exports.modifyUser = async (req, res) => {  // MODIFICAR PASSWORD USUARIO POR _ID
    try {
        // const usuarioModificado = await User.findById(req.body._id);
        const usuarioModificado = await User.findOne({ _id: req.body._id });
        req.body.password = bcrypt.hashSync(req.body.password, 10);

        usuarioModificado.password = req.body.password;
        await usuarioModificado.save();
        res.json({
            message: usuarioModificado
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'El usuario no ha podido modificarse correctamente'
        });
    }

};


module.exports.insertUser = async (req, res) => {  // NUEVO USUARIO
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const { name, password } = req.body;
    try {
        const newUser = new User({ name, password });
        await newUser.save();
        res.json({
            message: newUser
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'El usuario no ha podido crearse correctamente'
        });
    }
};


module.exports.borraUser = async (req, res) => { // BORRAR USUARIO POR _ID
    try {
        // const borraUsuario = await User.deleteOne(req.query.id);
        const borraUsuario = await User.findByIdAndRemove(req.query._id);
        res.json({
            message: borraUsuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'El usuario no ha podido borrarse correctamente'
        });
    }
};
