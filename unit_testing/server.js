var fs = require('fs');
var server = require('express').createServer();

server.get("/",function(request,response){

	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end("Hello there!");

});

module.exports = server;