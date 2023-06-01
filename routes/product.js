var express = require('express');
var router = express.Router();
const controllerProduct = require('../controllers/productController')

router.get('/', controllerProduct.detalle);

router.get('/search', controllerProduct.search);

// detalle del producto
router.get('/id/:id', controllerProduct.detalle);




// Armamos la creacion de productos
router.get('/create',controllerProduct.createForm);
//Armamos el metodo de guardado de ese form
router.post('/create',controllerProduct.save);


module.exports = router;