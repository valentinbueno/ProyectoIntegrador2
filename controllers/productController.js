const data = require('../data/data')
const db = require("../database/models")
const producto = db.Producto
let op = db.Sequelize.Op

const controllerProduct = {

  detalle: function (req, res) {
    let id = req.params.id;
    let rel = {
      include: [{association: "comentarios"}]
    }

   

    //filtro por PK
    producto.findByPk(id, rel)
      .then(function (result) {
        console.log(result.dataValues)
        return res.render('product', {
          producto: result.dataValues
        })
      })
      .catch(function (error) {
        console.log(error)
      });
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


