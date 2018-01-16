//lesson 2.2 Mounting Middleware
app.use(logger)
//lesson 2.3 Default Middleware
express-static
//lesson 2.4 Express Static
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/cities', function(req, res){
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  res.send(cities);
});

app.listen(3001);
//lesson 2.5 Script Tags
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cities</title>
</head>
<body>
  <h1>Cities</h1>

  <ul class='city-list'></ul>
  <script src="jquery.js"></script>
  <script src="client.js"></script>
</body>
</html>

 $.get('/cities', appendToList ); 

  function appendToList(cities) {
    var list = [];
    for(var i in cities){
      list.push($('<li>', { text: cities[i] }));
    }
    $('.city-list').append(list);
//lesson 2.7 Logging Middleware
module.exports = function (request, response, next) {
  var startTime = +new Date();
  var stream = process.stdout;
  var duration = null;

  response.on('finish', function () {
    duration = +new Date() - startTime;
    stream.write("This request took " + duration + " ms");
  });
  next();
  
};
//lesson 2.8 Add Logging Middleware
app.use(logger)
//lesson 2.9 Only GET
module.exports = function(request, response, next) {
  if (request.method === 'GET') {
    next();
  } else {
    response.send("Method is not allowed");
  }
}; 
//lesson 2.10 Buildings
A 404 response with 'Path requested does not exist'