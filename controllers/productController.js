const data = require('../data/data')
const db = require("../database/models")
const producto = db.Producto
let op = db.Sequelize.Op

const controllerProduct = {

  detalle: function (req, res) {
    let id = req.params.id;
    //creo relacion
    let rel = {
      include: [{association: "usuarios"},{association: "comentarios", include:[{association:"usuarios"}]}],
      limit: 7, order: [
        ['createdAt', 'DESC']
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
        ]},
        order: [
          ['createdAt', 'DESC']]
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
    let {imagen,nombre,descripcion}= req.body;
    let id_creador = req.session.usuario.id
    db.Producto.create({imagen,nombre,descripcion,id_creador})
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
    
  },
  comentar: (req,res)=> {
    
    let data=req.body;
    let id= req.params.id;
    let errorComentar= {};
    if(req.session.usuario != undefined){
      
      if (data.comentario != ""){
        db.Comentario.create({
          id_creador: req.session.usuario.id,
          id_producto:id,
          comentario: data.comentario,
        })
        
        .then((devolucion) => {
          return res.redirect('/product/id/'+id)
        }).catch((error) => {
          console.log(error)
        })
      }
      else{
        return res.redirect("/product/id/"+id)
        // errorComentar.message = 'El comentario no debe estar vacio'
        // res.locals.errors= errorComentar
        // return res.redirect('/product/id/' + id)
      }
    }
    else{
      res.redirect('/users/login')
    }
  }
}

module.exports = controllerProduct;


