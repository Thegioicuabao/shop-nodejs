var db = require('../db')
module.exports.addToCart = function(req, res){
    var productId = req.params.productId
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/products')
        return
    }
    var count =  db.get('sessions').find({id: sessionId}).get('cart.' + productId, 0).value()
    db.get('sessions').find({id: sessionId}).set('cart.' + productId, count+1).write();

    var x = db.get('sessions').find({id: sessionId}).value()
    var countCart = Object.values(x.cart).reduce((a, b) => a + b)
    db.get('sessions').find({id: sessionId}).set('sum', countCart).write();
    res.redirect('/products')
}