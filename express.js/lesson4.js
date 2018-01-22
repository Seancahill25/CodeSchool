//lesson 4.2 Parser Setup
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

app.post('/cities', parseUrlencoded, function (request, response) {
  var city = createCity(request.body.name, request.body.description);
  response.status(201).json(city);
});
//lesson 4.3 Validation
app.post('/cities', parseUrlencoded, function (request, response) {
 if(request.body.description.length > 4) {
  var city = createCity(request.body.name, request.body.description);
  response.status(201).json(city);
   } else {
     response.status(400).json("Invalid City");
   }
});
//lesson 4.5 Response Body
What would the response body be set to on a DELETE request to /cities/DoesNotExist? 
404
//lesson 4.6 Delete Route
app.delete('/cities/:name', function(request, response) {
  if(cities[request.cityName]) {
    delete cities[request.cityName];
    response.sendStatus(200);
    } else {
      response.sendStatus(404);
    }
});