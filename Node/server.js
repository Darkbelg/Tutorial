var http = require('http');
var onRequest = function(req,resp){
    resp.end('Hello world');
};
http.createServer(onRequest).listen(8888);

