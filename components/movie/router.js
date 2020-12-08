// Imports
const router = require('express').Router();
const controller = require('./controller.js');

// Routes (/films)
router.get      ('/', controller.getMovies);                /// ALL FILMS ///
router.get      ('/:title', controller.findMovies);         /// BUSCA FILM POR TITLE ///
router.patch    ('/', controller.modifyMovies);             /// MODIFICA FILM POR _ID ///
router.post     ('/', controller.insertMovies);             /// NUEVO FILM ///
router.delete   ('/', controller.borraMovies);              /// ELIMINA FILM POR _ID ///

// Exports
module.exports = router;
