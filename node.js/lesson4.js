//lesson 4.2 Missing Exports
var highfive = function() {
  console.log("smack!!");
};

module.exports = highfive;
//lesson 4.3 Export A Function
//my_request.js
var http = require('http');

var myRequest = function(message) {
  var request = http.request('http://codeschool.com', function(response) {
    response.pipe(process.stdout, { end: false });
  });

  request.write(message);
  request.end();
};

module.exports = myRequest;
//app.js
var myRequest = require('./my_request');
myRequest('Hello, this is dog.');
//lesson 4.4 Exporting An Object
var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};
  exports.info = info;
  exports.warn = warn;
  exports.error = error;
//lesson4.5 Installing Local Modules
npm install underscore
//lesson 4.6 Installing Global Modules
npm install coffee-script -g
//lesson 4.7 Dependency
{
  "name": "My Awesome Node App",
  "version": "1",
  "dependencies": {
        "connect": "2.1.1",
        "underscore": "1.3.3"
  }
}
//lesson 4.8 Semantic Versioning
{
  "name": "My Awesome Node App",
  "version": "1",
  "dependencies": {
    "connect": "~2.2.1",
    "underscore": "~1.3.3"
  }
}
