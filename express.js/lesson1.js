//lesson 1.2 Installing Express
npm install express@4.9
//lesson 1.3 Locations
var express = require('express');
var app = express();

app.get('/locations', function(request, response) {
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});

app.listen(3001, function() {
  console.log("Running Express");
});
//lesson 1.4 Content Type I
var express = require('express');
var app = express();

app.get('/locations', function (request, response) {
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});

app.listen(3001, function () {
  console.log("Running Express");
});
//lesson 1.5 Content Type II
app.get('/locations', function(request, response) {
    var cities = '<ul><li>Caspiana</li><li>Indigo</li></ul>';
    response.send(cities);
  });
//lesson 1.6 Cities
var express = require('express');
var app = express();

app.get('/cities', function (request, response {
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});
app.get('/locations', function(request, response) {
  response.redirect(301, '/cities');
});


app.listen(3001, function () {
  console.log("Running Express");
});