const router = require('express').Router();
const controller = require('./controller.js');


router.get('/', controller.getMovies);
router.get('/', controller.findMovies);
router.patch('/', controller.modifyMovies);
router.post('/', controller.insertMovies);


module.exports = router;