const User = require ('./model.js');

module.exports.getUsers = async (req, res) => {

    const data = await User.find({});
    res.json(data);
};


module.exports.findUser = async (req, res) => { // BUSCAR USUARIO

    const nombreUsuario = await User.findOne({name: req.params.name});
    res.json(`${nombreUsuario.name} Ha sido ENCONTRADO con exito`);
    
};


module.exports.modifyUser = async (req, res) => {  // MODIFICAR USUARIO

    const usuarioModificado = await User.findOne({_id: req.body._id});
    // const pelicula = await Movie.findById(req.body._id);
    // if(!movie) return res.json({error: elemento no encontrado});

    usuarioModificado.name = req.body.name;
    usuarioModificado.password = req.body.password;
    usuarioModificado.role = req.body.role;

    await usuarioModificado.save();
    res.json(`${usuarioModificado} Ha sido MODIFICADO con exito`);
};


module.exports.insertUser = async (req, res) => {  // NUEVO USUARIO
    const nuevoUsuario = req.body;

    const newUser = new User(nuevoUsuario);
    await newUser.save();
    res.json(`${newUser} Ha sido INTRODUCIDO con exito`);
};


module.exports.borraUser = async (req, res) => { // BORRAR USUARIO
    const borraUsuario = await User.deleteOne(req.query.id);
    res.json(`${borraUsuario} Ha sido borrado con exito`);
};
