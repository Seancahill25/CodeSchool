 //lesson 5.2 Express Routes
var express = require('express');
var app = express();
app.get('/tweets', function(request, response) {
  response.sendFile(__dirname + "/tweets.html");
});
app.listen(8080);
 //lesson 5.3 Route Params
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  res.end(quotes[req.params.name]);
});

app.listen(8080);
 //lesson 5.4 Rendering
 //app.js
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  res.end(quotes[req.params.name]);
});

app.listen(8080);
//view/quote.ejs
<h2>Quote by <%= name %></h2>

<blockquote>
  <%= quote %>
</blockquote>
 //lesson 5.5 URL Building
 var url = require('url');

options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
          
};

var searchURL = url.format(options);
console.log(searchURL);
 //lesson 5.6 Doing the Request
 var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
var request = require('request');
request(searchURL, function(err, response, body) {
  console.log(body);
});
 //lesson 5.7 Express Server
 var url = require('url');
var request = require('request');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var express = require('express');
var app = express();
app.get('/', function(req, res) {
  request(searchURL).pipe(res);
});
app.listen(8080);