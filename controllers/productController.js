const data = require ('../data/data')
const controllerProduct = {
  
detalle:function(req, res) {
  res.render('product',{
      products:data.products,
      userLogueado:false,
      comments:data.comments

  })},

add:function(req, res){
  res.render('product-add',{
    userLogueado:true,
    user:data.user,
  })},

search:function(req, res){
    res.render('search-results',{
      userLogueado:false,
      products:data.products,
    })

  
}

}

module.exports = controllerProduct;


