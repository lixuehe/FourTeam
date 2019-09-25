'use strict';   //严格模式，变量必须先声明，后执行。
var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');
//从命令行获取root目录，默认是当前目录
var root = path.resolve('.'); //
console.log('Static root dir:'+root);

//创建服务器：
//var workDir = path.resolve('.');
var server = http.createServer(function (request,response){
   //获取url的path,n
   var pathname = url.parse(request.url).pathname;
   //获取对应的本地文件路径
    console.log(pathname);
    var filepath = path.join(root,pathname);
    //获取文件状态
    fs.stat(filepath,function (err,stats){
       if(!err && stats.isFile()){
           //没有出错且文件存在：
           console.log('200'+request.url);
           //发送200响应
           response.writeHead(200,{'Content-Type':'text/html;charset= utf-8'});
           //将文件流导向response:
           fs.createReadStream(filepath).pipe(response);
       } else{
           //出错了或者文件不存在
           console.log('404'+request.url);
           //发送404响应
           response.writeHead(404,{'Content-Type':'text/html;charset= utf-8'});
           response.end('404 Not Found 达到');
       }
    });
});
server.listen(8080);
console.log('Server is running at http：//127.0.0.1：8080/');