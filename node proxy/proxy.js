
var
	http = require('http');
	

var server = http.createServer();

server.on("request", function(request, response) {
	delete request.headers['accept-encoding'];

	var proxyRequest = http.request({
		host: request.headers['host'],
		path: request.url,
		method: request.method,
		headers: request.headers
	}, function(proxyResponse) {
		response.writeHead(proxyResponse.statusCode, proxyResponse.headers);
		


		if (/html/.exec(proxyResponse.headers['content-type'])) {
			console.log("got html");

			var body = "";

			proxyResponse.on("data", function(chunk) {
				body += chunk;
			}).on("end", function() {
				console.log(body);
				//body = "";
				body = body.replace(/Answers/g, "Fake Answers");
				//console.log("finished");
				response.end(body, "utf8");
			})

		}
		else {
			proxyResponse.pipe(response);			
		}


	});			

	proxyRequest.on("error", function() {
		response.writeHead(500, {
			"Content-Type": "text/plain"	
		});
		response.end("You retard, " + request.url + " is unavailable.");
	})

	request.pipe(proxyRequest);
})

server.listen(8080);


