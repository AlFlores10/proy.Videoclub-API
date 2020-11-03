const User = require ('./model.js');

module.exports.getUsers = async (req, res) => {

    const data = await User.find({});
    res.json(data);
};


module.exports.findUser = async (req, res) => { // BUSCAR USUARIO

    const tituloUsuario = await User.findOne({name: req.params.name});
    res.json(`${tituloUsuario} Ha sido ENCONTRADO con exito`);
    
};


module.exports.modifyUser = async (req, res) => {  // MODIFICAR USUARIO

    const usuarioModificado = await User.findOne({_id: req.body._id});
    // const pelicula = await Movie.findById(req.body._id);
    // if(!movie) return res.json({error: elemento no encontrado});

    usuarioModificado = req.body;
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
    const borraUsuario = await User.findOne({name: req.body.name});
    await borraUsuario.remove();
    res.json(`${borraUsuario} Ha sido borrado con exito`);
};
