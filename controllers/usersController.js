const data = require ('../database/models') ;// ME TRAE TODOS LOS MODELOS 
const usuarios= data.Usuario; // TIENE QUE COINCIDIR CON EL ALIAS DEL MODELO
const usersController = {

    login:function(req, res) {
        res.render('login',{
            userLogueado:false,
        
        })},

    register:function(req, res) {
        res.render('register',{
            userLogueado:false,

        })},


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