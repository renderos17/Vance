/* Load the http library */

var http = require("http");

// makes an http server to handle responses

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("What's good?");
	response.end();
}).listen(8888);
