var express = require('express');
const usuariosController = require('../controllers/usuariosController');
var router = express.Router();
const validaUsuario = require('../middlewares/validacao/usuario')



/**http://localhost:3000/cadastro */
router.get('/cadastro',usuariosController.cadastro);
router.post('/cadastro', validaUsuario, usuariosController.salvar);


/**http://localhost:3000/login */
router.get('/login',usuariosController.login);
router.post('/login',usuariosController.autenticacao);

module.exports = router;
