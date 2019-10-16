var shortid = require('shortid');
var db = require('../db');
module.exports = function(req, res, next){
    if (!req.signedCookies.sessionId){
        let sessionId = shortid.generate();
        res.cookie('sessionId', sessionId, {
            signed: true
        });
        db.get('sessions').push({
            id: sessionId
        }).write();
    }
    let sessionId = req.signedCookies.sessionId;
    var x = db.get('sessions').find({id: sessionId}).value()
    res.locals.cart = Object.values(x.cart).reduce((a, b) => a + b)
    next();
}  
