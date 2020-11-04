const router = require('express').Router();
const controller = require('./controller.js');
const login = require('../config/config.js');


router.get      ('/', controller.getUsers);
router.get      ('/:name', controller.findUser);
router.patch    ('/', controller.modifyUser);
router.post     ('/', controller.insertUser);
router.delete   ('/', controller.borraUser);
router.get      ('/login', login.login);

module.exports = router;