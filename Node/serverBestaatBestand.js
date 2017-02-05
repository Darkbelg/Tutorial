var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');
    /* Node/public omdat de server begint in tutorial*/
var port = process.argv[2] || 8888,
    publicDir = path.join(process.cwd(), 'Node/public');

/* 404 not found */
var handle404 = function (req, resp) {
    resp.writeHead(404);
    console.log(404);
    resp.end('404');
};

var handle500 = function (req, resp) {
    resp.writeHead(500);
    console.log(500);
    resp.end('500');
};

var handle200 = function (file, resp) {
    resp.writeHead(200);
    console.log('200: ' + file);
    resp.end(file);
};



var onRequest = function (req, resp) {
    var uri = url.parse(req.url).pathname;
    var file = path.join(publicDir, uri);
    if (publicDir !== file.substr(0, publicDir.length)) {
        return handle500(req, resp);
    }
    fs.exists(file, function (exists) {
        if (!exists) return handle404(req, resp);
        if (fs.statSync(file).isDirectory()) {
            file = path.join(file, 'index.html');
            fs.exists(file, function (indexExists) {
                if (!indexExists) {
                    return handle404(req, resp);
                }
                return handle200(file, resp);

            });
        } else {
            return handle200(file, resp);
        }
    });
};
http.createServer(onRequest).listen(port);
