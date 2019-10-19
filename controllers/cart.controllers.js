var Session = require('../models/session.model');
module.exports.addToCart = async (req, res, next) => {
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    if(!sessionId) {
        res.redirect('/products');
        return;
    }

    var count = await Session.findOne({ sessionId: sessionId});
        count.cart.push({item: productId});
        count.save();
    res.redirect('/products')
}
