var express = require('express');
var router = express.Router();

const usersController= require('../controllers/usersController')

// sufijo para login
router.get('/login', usersController.login);

router.post('/login', usersController.login_post);


// sufijo para register
router.get('/register',usersController.register);

router.post('/register',usersController.storeRegister);


// sufijo para profile
router.get('/profile',usersController.profile );

// sufijo para profile edit
router.get('/edit', usersController.edit );


//sufijo para busqueda de usuarios
router.get('/search', usersController.search );

//sufijo para delete
router.post('/delete', usersController.destroy)



module.exports = router;
