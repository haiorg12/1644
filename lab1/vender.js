a=3

var b =5




let c =10

$x=5

const PI = 3.14




a=5 
b=6
c=a+b
console.log('a+b='+c)//noi nhau

a=17
b=3
console.log('a%b='+(a%b))



var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Help me!');
}).listen(8080);