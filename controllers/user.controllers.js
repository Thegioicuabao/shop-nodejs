var db = require('../db');

module.exports.index = function(req, res) {
  res.render('users/index', {
    users: db.get('users').value()
  });
};

module.exports.search = function(req, res) {
  var q = req.query.q;
  var data = db.get('users').value();
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
  var errors = [];
  if(!req.body.email){
    errors.push('Name is not required.')
  }
  if(!req.body.password){
    errors.push('Password is not required.')
  }
  if(!req.body.name){
    errors.push('Name is not required.')
  }
  if(!req.body.phone){
    errors.push('Phone is not required.')
  }
  if(errors.length){
    res.render('users/create', {
      errors: errors,
      values: req.body
    })
    return
  }
  db.get('users').push(req.body).write();
  res.redirect('/users');
};
