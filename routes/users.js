var express = require('express');
var router = express.Router();

const usersController= require('../controllers/usersController')

// sufijo para login
router.get('/login', usersController.login);

// sufijo para register
router.get('/register',usersController.register);

// sufijo para profile
router.get('/profile',usersController.profile );

// sufijo para profile edit
router.get('/edit', usersController.edit );

//sufijo para register nuevo
router.get('/register', usersController.create);
router.get('/register', usersController.store);


module.exports = router;
