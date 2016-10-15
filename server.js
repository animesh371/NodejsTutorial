var http = require('http')
var url = require('url')
var express = require('express')

var app = express();
var EventEmitter = require('events').EventEmitter;
http.createServer(function(request, response){

var game = new EventEmitter();
game.on('click', function(message){
		console.log(message);
		});
var page = url.parse(request.url).pathname;
console.log(url.parse(request.url).pathname);
var string ;

if(page == '/page')
{
string = "Requested url is page\n";
game.emit('click', 'Entered a url named '+ string)
}
else if (page == '/score')
{
string = "Requested url is score\n";
game.emit('click', 'Entered a url named '+ string)
}
else if (page == '/')
{
string = "Requested url is NULL\n";
}
else
{
console.log('Page not found');
game.emit('click', 'Entered an invalid url named '+ string)
}
if(page == '/page' || page == '/score' || page == '/')
{
	response.writeHead(200, {"Content-Type":"text/html"});
	var htmlPage = '<!DOCTYPE html>' +
			'<html>'+
			'<head>'+
			'<meta charset="utf-8" />' +
			'<title> First Node.js Web App ! </title>' +
			'</head>'+
			'<body>' +
			'<p> Here is a paragraph of <strong> HTML Web page </strong> ! </p>'+
			'<p>' + string + '</p>' +
			'</body>'+
			'</html>';
	response.end();
}
else
{
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write('Error 404 Page not found');
	response.end();

}
}).listen(8080);
