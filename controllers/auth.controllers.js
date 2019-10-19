var md5 = require('md5')
var User = require('../models/user.model');

module.exports.index = function(req, res) {
  res.render('auth/login', {
  });
};

module.exports.postLogin = async function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var hashedPassword = md5(password);
  var user = await User.findOne({ email: email });
  if(!user){
    res.render('auth/login', {
      errors: [
        'User does not exist.'
      ],
      values: req.body
    });
    return;
  }

  if(hashedPassword !== user.password){
    res.render('auth/login', {
      errors: [
        'Password is wrong.'
      ],
      values: req.body
    });
    return
  }
  res.cookie('userId', user.id,{
    signed: true
  })
  res.redirect('/users');
};