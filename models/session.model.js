var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
    item: String
},
{
    _id: false
});
var sessionSchema = new mongoose.Schema({
    sessionId: String,
    cart: [itemSchema]
},
{
    versionKey: false
});

var Session = mongoose.model('Session', sessionSchema, 'sessions');
var item = mongoose.model('item', itemSchema, 'item');
module.exports = Session;

