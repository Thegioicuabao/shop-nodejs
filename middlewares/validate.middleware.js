module.exports.postCreate = function(req, res, next){
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
  next();
}