const data = require ('../data/data')
const controllerIndex = {
    index: function(req, res) {
        res.render('index', {
          products:data.products,
          user:data.user,
          userLogueado:true,
        })
      }
}

module.exports = controllerIndex;