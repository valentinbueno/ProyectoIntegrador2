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
router.get('/profile/id/:id',usersController.profile );

// sufijo para profile edit
router.get('/edit/:id', usersController.edit);
router.post('/edit/:id',usersController.saveEdit)


//sufijo para busqueda de usuarios
router.get('/search', usersController.search );

//sufijo para delete
router.post('/delete', usersController.destroy)



module.exports = router;
