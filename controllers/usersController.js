const data = require ('../data/data')
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