var db = require('../db')

module.exports.index = function(req, res){
    var products = db.get('products').value()
    res.render('products/index', {
        products: products
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