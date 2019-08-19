var express= require('express');
var app = express();
var port = process.env.port||3000;
var bodyParser = require('body-parser');
var appRoutes = require('./app/routes/appRoutes');
var articleRoutes = require('./app/routes/articleRoutes');
var conf = require('./db');

app.listen(conf.port);
console.log('API server on: '+ port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/',appRoutes);
app.use('/',articleRoutes);

module.exports = app;