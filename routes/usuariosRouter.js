const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuariosController');


router.get('/', usuariosController.index);
router.post('/', usuariosController.create);
router.put('/:id', usuariosController.update);
router.delete('/:id', usuariosController.delete);



module.exports = router;  
