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
router.get('/profle-edit', usersController.edit );


module.exports = router;
