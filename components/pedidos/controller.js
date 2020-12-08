const Pedido = require ('./model.js');

module.exports.getPedidos = async (req, res) => {

    const data = await Pedido.find({});
    res.json(data);
};

module.exports.insertPedido = async (req, res) => {  // NUEVO PEDIDO
    const nuevoPedido = req.body;

    const newPedido = new Pedido(nuevoPedido);
    await newPedido.save();
    res.json(newPedido);
};