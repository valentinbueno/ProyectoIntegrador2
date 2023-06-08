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
//Armamos el metodo por el cual editamos los productos
router.get('/editar/id/:id',controllerProduct.editar); 
//Armamos el metodo por el cual guardamos esa edicion de producto
router.post('/editar/id/:id',controllerProduct.saveEdit);
//Armamos el metodo por el cual eliminamos un producto
router.post('/eliminar/id/:id',controllerProduct.eliminar);

module.exports = router;