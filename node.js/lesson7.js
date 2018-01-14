//lesson 7.2 Simple Redis Commands
var redis = require('redis');
var client = redis.createClient();
client.set("name", "Sean");
//lesson 7.3 Get A Key
var redis = require('redis');
var client = redis.createClient();
var result = client.get('question', function(err, data) {
  console.log(data);
});
//lesson 7.4 Working With Lists 1
var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

client.lpush("questions", question1, function(err, reply) {
  console.log(reply);
});
client.lpush("questions", question2, function(err, reply) {
  console.log(reply);
});
//lesson 7.5 Working With Lists 2
var redis = require('redis');
var client = redis.createClient();
client.lrange('questions', 0, -1, function(err, questions) {
  console.log(questions);
});
//lesson 7.6 Persisting Questions
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io');
var io = socket.listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      redisClient.lpush('questions', question);
//lesson 7.7 Emitting Stored Questions
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  redisClient.lrange('questions', 0, -1, function(err, questions) {
    questions.forEach(function(question) {
      client.emit('question', question);
    });
  });
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      redisClient.lpush("questions", question);
    }
  });
});
//lesson 7.8 Limiting Questions Storedvar express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  redisClient.lrange("questions", 0, -1, function(err, questions) {
    questions.forEach(function(question) {
      client.emit("question", question);
    });
  });

  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      redisClient.lpush("questions", question, function() {
        redisClient.ltrim("questions", 0, 19);
      });
    }
  }); 
});