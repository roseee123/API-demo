'user strict';
var conf = require('../../db');
var sql = require('mysql');
var connection = sql.createConnection(conf.db);

var User = function(user) {
    this.id= user.id;
    this.userid = user.userid;
    this.password = user.password;
    this.email = user.email;
    // this.created_at = new Date();
};

User.createUser = function(newUser, result) {
    connection.query("insert into account set ?", newUser, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
User.getUserById = function(id, result) {
    connection.query("select * from account where id = ?", id, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
User.getAllUser = function(result) {
    connection.query("select * from account", function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('users: ', res);
            result(null, res);
        }
    });
};
User.updateUserById = function(id, user, result) {

    connection.query("update account set userid=?, password=?, email=? where id = ?", [user.userid, user.password, user.email, id], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
User.remove = function(id, result) {
    connection.query("delete from account where id = ?", [id], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = User;