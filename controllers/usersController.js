const data = require ('../database/models') ;// ME TRAE TODOS LOS MODELOS 
const usuarios= data.Usuario; // TIENE QUE COINCIDIR CON EL ALIAS DEL MODELO.
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
    create: function(req, res) {
        res.render('register')
        },
    store: function (req,res) {
        let info= req.body;
        let userStore = {
            name: info.name,
            email:info.email,
            created_at: new Date()
            }
        user.create(userStore)
        .then (function (result) {
            return res.redirect('/user/login');
        })
        .catch(function (error) {
            console.log(error);
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