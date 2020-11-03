const Pedido = require ('./model.js');

module.exports.getPedidos = async (req, res) => {

    const data = await Pedido.find({});
    res.json(data);
};