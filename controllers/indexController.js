const data = require ('../data/data')

const db = require('../database/models')
const controllerIndex = {
    index: function(req, res) {


      db.Producto.findAll()
      .then(function(result) {
        res.render('index', {
          products: result,
          user:data.user,
          userLogueado: true,
        })
      }).catch(function(err) {
        console.log(err);
      })

        
      }
}

module.exports = controllerIndex;