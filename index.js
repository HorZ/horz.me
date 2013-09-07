var http = require("http");
var os = require("os");
var url = require("url");

http.createServer(res).listen(80);
console.log("Server running at " + os.hostname());

function res(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("what's up?");
  response.end();


  var time = new Date().toLocaleString().substr(0, 33);
  console.log("[Request] - [" + time + "]: request for " + request.url);
}
