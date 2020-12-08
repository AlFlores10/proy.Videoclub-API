// Imports
const router = require('express').Router();
const controller = require('./controller.js');

// Routes (/)
router.post     ('/', controller.insertUser);               /// NUEVO USUARIO ///

// Routes (/users)
router.get      ('/', controller.getUsers);                 /// TODOS LOS USUARIOS ///
router.get      ('/:name', controller.findUser);            /// BUSQUEDA USUARIO POR NAME ///
router.patch    ('/', controller.modifyUser);               /// MODIFICA PASSWORD USUARIO POR _ID ///
router.delete   ('/', controller.borraUser);                /// ELIMINAR USUARIO POR _ID ///

// Exports
module.exports = router;