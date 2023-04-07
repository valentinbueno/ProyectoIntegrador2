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

        })},

    edit: function(req, res) {
        res.render('profile-edit',{
            userLogueado:true,

        })},
        
}

module.exports= usersController