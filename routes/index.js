const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController')
const servicosController = require('../controllers/servicosController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Petshop' });
});
//rota para /pets que retorna o metodo index da petsController
router.get('/pets', petsController.index);

router.get('/pets/:nome', petsController.show);

router.get('/servicos', servicosController.index);

router.get('/servicos/:nome', servicosController.show);

module.exports = router;
