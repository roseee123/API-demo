// var express= require('express');
// var router = express.Router();
// var jwt = require('jsonwebtoken');

// var users = require('../controller/usersController');

// const SECRET = '55665566';

// router.post('/', (req, res) => {
//     let username = req.body.username;
//     let password = req.body.password;

//     users.authenticate(username, password)
//     .then((result) => {
//         if (result) {
//             let token = jwt.sign({ username: username}, SECRET, {'expiresIn': '1h'});
//             res.json({ success: true, payload: token});
//         } else {
//             res.json({ success: false, payload: 'please check username and password'});
//         }
//     })
//     .catch(err => {
//         res.status(400).send(err);
//     })
// })

// module.exports = router;