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
    res.locals.countCart = db.get("sessions").find({ id: req.signedCookies.sessionId }).get("cart").size().value();
    next();
}  
