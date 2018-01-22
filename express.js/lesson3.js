//lesson 3.2 City Search
var express = require('express');
var app = express();

var cities = ['Caspiana', 'Indigo', 'Paradise'];

app.get("/cities", function(request, response) {
  if(request.query.search) {
    response.json(citySearch(request.query.search));
  }
});

function citySearch (keyword) {
  var regexp = RegExp(keyword, 'i');
  var result = cities.filter(function (city) {
    return city.match(regexp);
  });

  return result;
}

app.listen(3000);
//lesson 3.3 Dynamic Route Variables
When requests come in for this route, how can we access the city name submitted by the user?
request.params.name
//lesson 3.4 City Information
app.get('/cities/:name', function (request, response) {
  var cityInfo = cities[request.params.name];
    if(cities[request.params.name]) {
      response.json(cityInfo);
    } else {
      response.status(404).json("City not found");
    }
//lesson 3.6 Flexible Routes
app.get('/cities/:name', function (request, response) {
  var cityName = parseCityName(request.params.name);
  var cityInfo = cities[cityName];
  if(cityInfo) {
    response.json(cityInfo);
  } else {
    response.status(404).json('City not found');
  }
});
//lesson 3.7 Dynamic Routes I
Which Express function maps placeholders to callback functions, and is commonly used for running pre-conditions on Dynamic Routes?
app.param()
//lesson 3.8 Dynamic Routes II
app.param('name', function(request, response, next) {
  request.cityName = parseCityName(request.params.name);
  next();
});
//lesson 3.9 Dynamic Routes III
app.param('year', function(request, response, next) {
  if(isYearFormat(request.params.year)) {
    next();
  } else {
    response.status(400).json('Invalid Format for Year');
  }
});
//lesson 3.10 Dynamic Routes IV
With the proper validations in place for the following code, what would the output be for a GET request to /cities/year/500?
400 Invalid Format for Year