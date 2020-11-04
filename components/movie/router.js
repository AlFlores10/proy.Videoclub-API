const router = require('express').Router();
const controller = require('./controller.js');


router.get      ('/', controller.getMovies);
router.get      ('/:title', controller.findMovies);
router.patch    ('/', controller.modifyMovies);
router.post     ('/', controller.insertMovies);
router.delete   ('/', controller.borraMovies);

module.exports = router;
