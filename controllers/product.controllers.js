var Product = require('../models/product.model')

module.exports.index = async function(req, res){
    var page = parseInt(req.query.page)|| 1; 
    var perPage = 8;
    var start = (page-1)*perPage;
    var end = start + perPage
    var products = await Product.find();
    
    res.render('products/index', {
        products: products.slice(start, end),
        page: page
      });
}
module.exports.search = async function(req, res){
    var q = req.query.q
    var products = await Product.find();
    var matchedProduct = products.filter(value => {
        return value.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('products/index', {
        products: matchedProduct
      })
}