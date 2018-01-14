//lesson 1.2 Hello You
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is Sean");
  response.end();
}).listen(8080);

//lesson 1.3 Convert Blocking
var fs = require('fs');

fs.readFile('index.html', function(error, contents){
  console.log(contents);
});

//lesson1.4 Running your Code
node file_read.js

//lesson1.5 Read file in server
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(error, data) {
    response.write(data);
    response.end();
  });
}).listen(8080);

//lesson1.6 Issuing a request
curl http://localhost:8080

//lesson1.7 Writing response headers
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('index.html', function(err, contents) {
    response.write(contents);
    response.end();
  });
}).listen(8080);

//lesson1.8 Response End
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.end("Hello, this is dog");
}).listen(8080);