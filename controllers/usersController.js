const data = require ('../database/models') ;// ME TRAE TODOS LOS MODELOS 
const usuarios= data.Usuario; // TIENE QUE COINCIDIR CON EL ALIAS DEL MODELO.
const bcrypt = require('bcryptjs');
const usersController = {

    login:function(req, res) {
        res.render('login')
    },

    storeLogin:function(req, res) {
        // Recibir la info del formulario y ñvalidar si el mail existe en la Base de datos y si la contraseña coincide con la contraseña encriptada que tengo en la base de datos
        // ACA tu creas una session y mandas un locals 
        res.redirect('/users/profile')
    },

    register:function(req, res) {
        res.render('register')
    },

    storeRegister:function(req, res) {
        let info = req.body;
    
        let userStore = {
            usuario: info.usuario,
            mail: info.mail,
            password: bcrypt.hashSync(info.password, 10),
            foto_de_perfil: info.foto_de_perfil,
            fecha_de_nacimiento: info.fecha_de_nacimiento,
            dni: info.dni,
        }
        // Hacer el create con el modelo para guardar el registro en la base de datos, siempre usando del trycatch
        usuarios.create(userStore)
        .then(function(result) {

            return res.redirect('/users/login')
            
        }).catch(function(error) {

            console.log(error);
            
        })
    },


    profile:function(req, res) {
        res.render('profile',{
            userLogueado:true,
            user:data.user,
            products:data.products,
        })},

    edit: function(req, res) {
        res.render('profile-edit',{
            userLogueado:true,
            user:data.user,
        })},
    
    



    login_post: function (req, res) {
        let email_buscado = req.body.email;
        let filtrado = {
            where: [{email:email_buscado}]
        };
        user.findOne(filtrado)
        .then((result) => {
            if (result != null) {
                return res.send('Existe el mail')
            }
            else{
                return res.send('Nooo existe el mail')
            }
        })
        .catch((err) => {
            console.log(err);
        })}
    
}

module.exports= usersController