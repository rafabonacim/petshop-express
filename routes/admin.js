const express = require('express'); //chama o modulo express
const router = express.Router(); //chama metodo que gerencia as rotas
const servicosController = require('../controllers/servicosController');

/*http://localhost:3000/admin */
router.get('/', (request,response) =>{
    response.render('admin', {titulo: 'Painel administrativo'});  
});


/*http://localhost:3000/admin/servicos */
router.get('/servicos',servicosController.index);

/*http://localhost:3000/admin/servicos/cadastro */
router.get('/servicos/cadastro',servicosController.cadastro);

/*http://localhost:3000/admin/servicos/cadastro */
router.post('/servicos/cadastro',servicosController.salvar);

module.exports = router;