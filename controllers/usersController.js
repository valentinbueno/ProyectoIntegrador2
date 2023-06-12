const data = require ('../database/models') ;// ME TRAE TODOS LOS MODELOS 
const usuarios= data.Usuario; // TIENE QUE COINCIDIR CON EL ALIAS DEL MODELO.
const bcrypt = require('bcryptjs');
const usersController = {

    login:function(req, res) {
        res.render('login')
    },

    login_post:function(req, res) {
        // Recibir la info del formulario y ñvalidar si el mail existe en la Base de datos y si la contraseña coincide con la contraseña encriptada que tengo en la base de datos
        // ACA tu creas una session y mandas un locals 
        //res.redirect('/users/profile')
        let email_buscado = req.body.mail;
        let password = req.body.password
        let filtrado = {
            where: [{mail: email_buscado}]
        };

        usuarios.findOne(filtrado)
        .then((result) => {
            if (result != null) {
                let clave_correcta = bcrypt.compareSync(password, result.password)
                if(clave_correcta){
                    req.session.usuario = result.dataValues
                    return res.redirect('/');
                } else{
                    return res.send('Contraseña incorrecta')
                }
                }else{
                return res.send('Mail inexistente')
            }
        })
        .catch((err) => {
            console.log(err);
        })
        
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
}

module.exports= usersController