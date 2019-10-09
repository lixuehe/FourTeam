'use strict';   //严格模式，变量必须先声明，后执行。
var fs = require('fs'),
  http = require('http');
var server = http.createServer(function (request,response){
  response.writeHead(200,{
    "Access-Control-Allow-Origin":"*",
  });

  if(request.method =="POST"){
    request.on('data',function (data) {
      fs.appendFile('/home/hxt/FIveStars/stars/public/some.txt',data,function (err) {
        if(err){
          console.log(err);
        }else {
          console.log("计算机读取到的数据是："+data);
        }
      })
    })
    response.end("写入数据成功");
  }
    });

server.listen(8080);
console.log('Server is running at http：//127.0.0.1：8080/');
