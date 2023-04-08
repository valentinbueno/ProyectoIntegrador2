var express = require('express');
var router = express.Router();
const controllerProduct = require('../controllers/productController')

router.get('/', controllerProduct.detalle);


module.exports = router;