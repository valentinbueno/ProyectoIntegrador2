const data = require ('../data/data')
const controllerHeader = {
    header: function(req, res) {
        res.render('header', {
          user:data.user,
          userLogueado:true,
        })
      }
}

module.exports = controllerHeader;

