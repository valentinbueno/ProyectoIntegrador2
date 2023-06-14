const data = require('../data/data')
const db = require("../database/models")
const producto = db.Producto
let op = db.Sequelize.Op

const controllerProduct = {

  detalle: function (req, res) {
    let id = req.params.id;



    //creo relacion
    let rel = {
      include: [{association: "usuarios"},{association: "comentarios", include:[{association:"usuarios"}]}
      
    ]
    }


    //filtro por PK
    producto.findByPk(id, rel)
      .then(function (result) {
        console.log(result)
        return res.render('product', {
          producto: result
        })
      })
      .catch(function (error) {
        console.log(error)
      });
  },



  search: (req, res)=> {
    let busqueda = req.query.search;

    producto.findAll({
      
      where:{
        [op.or]:[
        {nombre: { [op.like]: "%" + busqueda + "%" }},
        {descripcion: { [op.like]: "%" + busqueda + "%" }},

        ]}

         

    }).then(function(result){
      return res.render('search-results',{productos: result });

    })

    .catch(function (error) {
      
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
  },
  editar: (req,res) => {
    let id= req.params.id;
    producto.findByPk(id)
    .then((devolucion) => {
      console.log(devolucion);
      return res.render("product-edit", {producto:devolucion})
    })
    .catch((error) => {
      console.log(error)
    })
  },
  saveEdit: (req,res) =>{
    let id= req.params.id;
    let data= req.body;
    producto.update(data, {
      where: [
        {id:id}
      ]
    })
    .then((devolucion) => {
      return res.redirect("/product/id/" + id)
    })
    .catch((error) => {
      console.log(error);
    });
    

  },
  eliminar: (req,res) =>{
    let id_destructor= req.body.id
    producto.destroy({
      where: [
        {id:id_destructor}
      ]
    })
    .then((devolucion) => {
      return res.redirect("/")
    })
    .catch((error) => {
      console.log(error);
    });
    
  }
}

module.exports = controllerProduct;


