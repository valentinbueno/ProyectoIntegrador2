const data = require ('../database/models') ;// ME TRAE TODOS LOS MODELOS 
const usuarios= data.Usuario; // TIENE QUE COINCIDIR CON EL ALIAS DEL MODELO.
const bcrypt = require('bcryptjs');
const db = require("../database/models");
const session = require('express-session');
let op = db.Sequelize.Op
const usersController = {

    login:function(req, res) {
        res.render('login')
    },

    login_post:function(req, res) {
        let email_buscado = req.body.mail;
        let password = req.body.password
        let filtrado = {
            where: [{mail: email_buscado}]
        };

        usuarios.findOne(filtrado)
        .then((result) => {
            let errorLogin = {}
            if (result != null) {
                let clave_correcta = bcrypt.compareSync(password, result.password)
                if(clave_correcta){
                    req.session.usuario = result.dataValues
                    if(req.body.remember != undefined){
                        res.cookie('userId', result.id, {maxAge: 1000 * 60 * 15})
                    }
                    return res.redirect('/');
                } else{
                    errorLogin.message = "Contraseña incorrecta"
                    res.locals.errorLogin = errorLogin
                    return res.render('login')
                }
                }else{
                    errorLogin.message = "Mail inexistente"
                    res.locals.errorLogin = errorLogin
                return res.render('login')
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
        let errors = {}
        if(req.body.mail=="" && req.body.usuario=="" && req.body.password=="" && req.body.dni==""){
            errors.message = "Complete los campos"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.mail==""){
            errors.message = "Ingrese el mail"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.usuario==""){
            errors.message = "Ingrese el usuario"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.password==""){
            errors.message = "Ingrese la contraseña"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.fecha_de_nacimiento=""){
            errors.message = "Ingrese su fecha de nacimiento"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.dni==""){
            errors.message = "Ingrese su DNI"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.password.length<3){
            errors.message = "La contraseña debe tener al menos tres caracteres"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.password){
            let mail_repetido= {where:[{mail: {[op.like]:req.body.mail}}]}
            db.Usuario.findOne(mail_repetido)
            .then(function(mail_repetido){
                if (mail_repetido != undefined){
                    errors.message = "El email ingresado ya esta registrado";
                    res.locals.errors = errors
                    return res.render('register')}
                else{
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
                                }
                            })
                        }},


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


        search: (req, res)=> {
            let busqueda = req.query.search;
        
            usuarios.findAll({
              
              where:{
                [op.or]:[
                {usuario: { [op.like]: "%" + busqueda + "%" }},
                {mail: { [op.like]: "%" + busqueda + "%" }},
        
                ]},
        
                order: [
                  ['createdAt', 'DESC']]
        
                 
        
            }).then(function(result){
              return res.render('search-users',{usuarios: result });
        
            })
        
            .catch(function (error) {
              
            })},
        
            destroy: (req,res) => {

                req.session.usuario=null
                res.clearCookie('userId')

                return res.redirect("/users/login")
            }


    
    }

module.exports= usersController