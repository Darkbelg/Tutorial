var http = require('http'),url=require('url'),path=require('path');
var port =process.argv[2]||8888;

var onRequest = function(req,res){
    var uri = url.parse(req.url).pathname;
     /* Node/public omdat de server begint in tutorial*/
    var file = path.join(process.cwd(),'Node/public',uri);
    res.end(file);
};
http.createServer(onRequest).listen(port);

