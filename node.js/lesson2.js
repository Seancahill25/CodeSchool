//lesson 2.2 Chat emitter
var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();
chat.on('message', function(message) {
  console.log(message);  
});
//lesson 2.3 Emitting events
var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// Emit events here
chat.emit('join',"Sean");
chat.emit('message', "Sean");
//lesson2.4 Request event
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response){
   response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.listen(8080);
//lesson2.5 Listening Twice
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
  server.on('request', function(request, response) {
    console.log("New request coming in...");
  });
server.listen(8080);
//lesson2.6 Listening for Close
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.on('close', function() {
  console.log("Closing down the server...");
});

server.listen(8080);
