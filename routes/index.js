var express = require('express');
var router = express.Router();
const controllerIndex = require('../controllers/indexController')
const controllerHeader = require('../controllers/headerController')

router.get('/', controllerIndex.index);
router.get('/', controllerHeader.header);


  
module.exports = router;