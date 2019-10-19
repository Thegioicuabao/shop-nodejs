var Session = require('../models/session.model');
var shortid = require('shortid');
module.exports = async function(req, res, next) {
    if(!req.signedCookies.sessionId) {
        var sessionId = shortid.generate();
        res.cookie('sessionId', sessionId, {
            signed: true
        });
        const sessions = new Session({sessionId: sessionId});
        sessions.save();
    }

    if(req.signedCookies.sessionId) {   
    var x = await Session.findOne({ sessionId: req.signedCookies.sessionId })
    res.locals.countCart =  x.cart.length;}
    next();
}