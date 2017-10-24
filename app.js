var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var path = require('path');
var routes = require('./routes');

var PORT = process.env.PORT || 3000;
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(PORT);