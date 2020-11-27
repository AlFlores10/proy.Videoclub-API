const router = require('express').Router();
const controller = require('./controller.js');
const login = require('../config/config.js');


router.get      ('/', controller.getUsers);
router.get      ('/', controller.findUser);
router.post     ('/', controller.insertUser);
router.patch    ('/', controller.modifyUser);
router.delete   ('/', controller.borraUser);

module.exports = router;