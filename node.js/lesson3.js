//lesson 3.2 File read strem
var fs = require('fs');
var file = fs.createReadStream('fruits.txt');
file.on('readable', function() {
  var chunk = null;
  while (null !== (chunk = file.read())) {
     console.log(chunk.toString());
  }
 
});
//lesson 3.3 Files piping
var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

file.pipe(process.stdout);
//lesson 3.4 Fixing Pipe
var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, { end: false});

file.on('end', function(){
  destFile.end('Finished!');
});
//lesson 3.5 Download Server
var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);
}).listen(8080);
