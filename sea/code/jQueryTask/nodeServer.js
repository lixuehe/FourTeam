'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http')
    /*
    util = require('util'),
    querystring = require('querystring');
    */

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

// 创建服务器:
var server = http.createServer(function (request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHeader(200, {'Content-Type' : 'text/html;charset:utf-8'});
                // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
            // 接收post参数。
            var postData = "";
            request.on("data",function(chunk){
                postData += chunk;
            })
            request.on("end",function(){
                if(postData.length==0){
                    return false;
                }
                fs.readFile('./text.json',function(err,data){
                  if(err){
                      return console.error(err);
                  }
                  var jsonStr = data.toString();//将二进制转为json字符串
                  var json = JSON.parse(jsonStr);//将json字符串转换为json对象
                  var post = JSON.parse(postData);//传进来的post数据是json字符串，转换为json对象
                  json.message.push(post);
                  console.log(json.message);
                  var str = JSON.stringify(json);//json对象转换为json字符串
                    fs.writeFile('./text.json',str,{flag:'w'},err=>{
                        if(!err){
                            console.log('数据写入成功');
                            console.log(postData);
                        }else{
                            console.log('数据写入失败');
                        }
                    })
                })
            })
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});
function testJson(){

}

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
