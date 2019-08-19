'user strict';
var User = require('../model/appModel');

exports.list_all_users = function(req, res) {
    User.getAllUser(function(err, user) {
        console.log('controller');
        if (err) {
            res.send(err);
            console.log('res', user);
        }
        res.send(user);
    });
};

exports.create_a_user = function(req, res) {
    var new_user = new User(req.body);
    if (!new_user.userid || !new_user.password || !new_user.email) {
        res.status(400).send({ error: true, message: 'please provide userid/password/email'});
    } else {
        User.createUser(new_user, function(err, user) {
            if (err) res.send(err);
            res.json(user);
        });
    }
};

exports.read_a_user = function(req, res) {
    User.getUserById(req.params.id, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
};
  
exports.update_a_user = function(req, res) {
    User.updateUserById(req.params.id, new User(req.body), function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
};
  
exports.delete_a_user = function(req, res) {  
    User.remove( req.params.id, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'User successfully deleted' });
    });
};