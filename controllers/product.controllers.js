var db = require('../db')

var products = db.get('products').value()
module.exports.index = function(req, res){
    res.render('products/index', {
        products: products
      })
}