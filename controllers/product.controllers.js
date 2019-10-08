var db = require('../db')

module.exports.index = function(req, res){
    var page = parseInt(req.query.page)|| 1; 
    var perPage = 8;
    var start = (page-1)*perPage;
    var end = start + perPage
    var products = db.get('products').value().slice(start, end)
    res.render('products/index', {
        products: products,
        page: page
      });
}
module.exports.search = function(req, res){
    var q = req.query.q
    var products = db.get('products').value()
    var matchedProduct = products.filter(value => {
        return value.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('products/index', {
        products: matchedProduct
      })
}