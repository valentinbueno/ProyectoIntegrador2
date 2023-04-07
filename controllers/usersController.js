const usersController = {

    login:function(req, res) {
        res.send('aqui info de login')
    },

    register:function(req, res) {
        res.send('aqui info de register')
    },

    profile:function(req, res) {
        res.send('aqui info de profile')
    },

    edit: function(req, res) {
        res.send('aqui info de profile-edit')
    },
        
}

module.exports= usersController