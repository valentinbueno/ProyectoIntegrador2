const data = require('../data/data')
const db = require("../database/models")
const controllerProduct = {

  detalle: function (req, res) {

    let id = req.params.id;




    ///
    res.render('product', {
      products: data.products,
      userLogueado: false,
      comments: data.comments

    })
  },


  search: function (req, res) {
    res.render('search-results', {
      userLogueado: false,
      products: data.products,
    })
  },
  createForm: (req, res) => {


    return res.render('product-add', { userLogueado: true, user: { usuario: "Jose" } })
  },
  save: (req, res) => {
    let informacion = req.body;
    console.log(informacion) // para ver que se cargue el producto correctamente  
    db.Producto.create(informacion)
      .then((devolucion) => {
      return res.redirect('/')
      }).catch((error) => {
        console.log(error)
      })
  }
}

module.exports = controllerProduct;


