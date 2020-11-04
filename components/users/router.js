const router = require('express').Router();
const controller = require('./controller.js');


router.get      ('/', controller.getUsers);
router.get      ('/:name', controller.findUser);
router.patch    ('/', controller.modifyUser);
router.post     ('/', controller.insertUser);
router.delete   ('/', controller.borraUser);

module.exports = router;