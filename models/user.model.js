var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    avatar: String
},
{
    versionKey: false
})
var User = mongoose.model('User', userSchema, 'users');
module.exports = User;