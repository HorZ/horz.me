var http = require("http");
var os = require("os");
var url = require("url");
var fs = require("fs");

http.createServer(res).listen(80);
console.log("Server running at " + os.hostname());

function res(request, response) {
    route(request, response);

    var time = new Date().toLocaleString().substr(0, 33);
    console.log("[Request] - [" + time + "]: request for " + request.url);
}

function route(request, response) {
    var path = url.parse(request.url).pathname;

    if (path == "/favicon.ico") {
        var icon = fs.readFileSync("favicon.ico");
        response.writeHead(200, {"Content-Type": "image"});
        response.write(icon);
    } else {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("what's up?");
    }
    response.end();
}