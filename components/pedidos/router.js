const router = require('express').Router();
const controller = require('./controller.js');


router.get('/', controller.getPedidos);

module.exports = router;