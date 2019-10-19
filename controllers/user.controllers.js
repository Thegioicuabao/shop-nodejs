var User = require('../models/user.model');
var md5 = require('md5');

module.exports.index = async function(req, res) {
  var users = await User.find();
  res.render('users/index', {
    users: users
  });
};

module.exports.search = async function(req, res) {
  var q = req.query.q;
  var data = await User.find();
  var matchedUser = data.filter(value => {
    return value.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  })
  res.render('users/index', {
    users: matchedUser
  });
};

module.exports.create = function(req, res) {
  res.render('users/create');
};

module.exports.postCreate = function(req, res) {
  req.body.password = md5(req.body.password);
  req.body.avatar = req.file.path.split('/').slice(1).join('/');
  const user = new User({
     name: req.body.name, 
     phone: req.body.phone,
     email: req.body.email,
     password: req.body.password,
     avatar: req.body.avatar
    }); 
  user.save();
  res.redirect('/users');
};

module.exports.get = async function(req, res){
  var id = req.params.id;
  var user = await User.findById(id);
  res.render('users/view', {
    user: user
  });
}