var express= require('express');
var router = express.Router();
var userList = require('../controller/appController');

router.route('/users')
.get(userList.list_all_users)
.post(userList.create_a_user);

router.route('/users/:id')
.get(userList.read_a_user)
.put(userList.update_a_user)
.delete(userList.delete_a_user);

module.exports = router;
