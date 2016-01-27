var express = require('express');
var exphbs  = require('express-handlebars');
var colors = require('colors');
var bodyParser = require('body-parser');

var routes = require('./config/routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/static', express.static('dist'));

app.use('/', routes);

var server = app.listen(9000, function () {
  console.log('✓ Listening on port 9000'.green);
});