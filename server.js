var express= require('express');
var app = express();
var port = process.env.port||3000;
var bodyParser = require('body-parser');
var appRoutes = require('./app/routes/appRoutes');
var articleRoutes = require('./app/routes/articleRoutes');
// var usersRoutes = require('./app/routes/usersRoutes');
var conf = require('./db');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware
app.use(cors());
app.options('*', cors());

app.use('/userList',appRoutes);
app.use('/',articleRoutes);
// app.use('/', usersRoutes);

app.listen(conf.port);
console.log('API server on: '+ port);

module.exports = app;