const router = require('express').Router();
const controller = require('./controller.js');


router.get('/', controller.getPedidos);
router.post('/', controller.insertPedido);

module.exports = router;