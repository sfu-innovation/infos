
var 
    fs = require('fs'),
    http = require('http'),
    EventEmitter = require('events').EventEmitter,
    util = require('util');

function MyGreatClass() {
    EventEmitter.call(this); //super()
}

util.inherits(MyGreatClass, EventEmitter);

MyGreatClass.prototype.hello = function(name) {
    this.emit("hi", name);
}

MyGreatClass.prototype.sendTime = function(response) {
    var date = new Date();
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(date.toString());
    response.end();
}

var foo = new MyGreatClass();


foo.on("hi", function(name) {
    console.log("Someone said hello to "+name);
});



var server = http.createServer();

server.on("request", function(request, response) {
    if (request.url === '/') {
         response.writeHead(200, { "Content-Type": "text/html" });
         fs.createReadStream('./index.html').pipe(response);
    }
    else if (request.url === '/hedy') {
        fs.readFile('./index.html', 'utf8', function(err, data) {
            if (err) {
                response.writeHead(500);
                response.end();
                return;
            }
            var now =  new Date();
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data.replace(/%%NAME%%/g, "Hedy").replace(/%%TIME%%/g, now.toString()));
            response.end();
            
        });
    }
    else if (request.url === '/time') {
        foo.sendTime(response);   
    }
    else {
        response.writeHead(404);
        response.end();
    }
   
    
});

server.on("request", function(request, response) {
   console.log("Got request for: "+request.url); 
});


server.listen(process.env.PORT);









