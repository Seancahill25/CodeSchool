//lesson 6.2 Setting Up socket.io Server-Side
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.sockets.on('connection', function(client) {
  console.log("Client connected...");
});
server.listen(8080);
//lesson 6.3 Client socket.io Setup
<script src="/socket.io/socket.io.js"></script>
<script>
var server = io.connect('http://localhost:8080');
</script>
//lesson 6.4 Listening For Questions
<script src="/socket.io/socket.io.js"></script>
<script src="/insertQuestion.js"></script>

<script>
  var server = io.connect('http://localhost:8080');
server.on('question', function(question) {
 insertQuestion(question);
});          
</script>
//lesson 6.5 Broadcasting Questions
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");
  client.on('question', function(question) {
  client.broadcast.emit('question', question);
  }); 
});

server.listen(8080);
//lesson 6.6 Saving Client Data
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");

  client.on('question', function(question) {    
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});

server.listen(8080);
//lesson 6.7 Answering Questions
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");

  // listen for answers here
  client.on('answer', function(question, answer) {
   client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});

server.listen(8080);
//lesson 6.8 Answering Question Client
<script src="/socket.io/socket.io.js"></script>

<script>
  var server = io.connect('http://localhost:8080');

  server.on('question', function(question) {
    insertQuestion(question);
  });
  server.on('answer', function(question, answer) {
    answerQuestion(question, answer);
  }); 
  //Don't worry about these methods, just assume 
  //they insert the correct html into the DOM
  // var insertQuestion = function(question) {
  // }

  // var answerQuestion = function(question, answer) {
  // }
</script>