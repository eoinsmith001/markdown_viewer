var express = require('express'),
    sharejs = require('share');
require('redis');

// sharejs options
var options = {
  db: {
    type: 'redis'
  }
};

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res) {
  res.render('pad');
});

app.get('/(:id)', function(req,res) {
  res.render('pad');
});

sharejs.server.attach(app,options);

var port = process.env.PORT || 8080;

app.listen(port);
