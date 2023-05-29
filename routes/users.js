var express = require('express');
var router = express.Router();

const usersController= require('../controllers/usersController')

// sufijo para login
router.get('/login', usersController.login);

router.post('/login', usersController.storeLogin);


// sufijo para register
router.get('/register',usersController.register);

router.post('/register',usersController.storeRegister);


// sufijo para profile
router.get('/profile',usersController.profile );

// sufijo para profile edit
router.get('/edit', usersController.edit );



module.exports = router;
