'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' +root);

var server = http.createServer(function (request, response){
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root, pathname);
    var defaultPage = ['/index.html', '/defalut.html'];
    var filePathWithDefalut = false;

    fs.stat(filepath, function (err, stats){
        if (err) {
            console.log('404' +request.url);
            response.writeHead(404);
            response.end('404 Not Found00');
        } else if(stats.isFile()) {
            console.log('200' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else if(stats.isDirectory()){
            for (let i=0; i<defaultPage.length; i++){
                var filePath = path.join(root,defaultPage[i]);
                try {
                    fs.statSync(filePath);
                    fs.createReadStream(filePath).pipe(response);
                    filePathWithDefalut = true;
                } catch(e) {
                    filePathWithDefalut = false;
                }
                    if (filePathWithDefalut) break;
            }
        }
/*          if (!filePathWithDefalut) {
            console.log('404' + request.url);
            response.writeHead(404);
            response.end('404 Not Found22');
        } */
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080');