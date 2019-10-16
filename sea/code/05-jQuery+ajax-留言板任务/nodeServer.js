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

// 接收post参数。
var postData = "";


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
            request.on("data",function(chunk){
                postData += chunk;
            })
            request.on("end",function(){
                //如果postData的长度等于0，则退出执行
                if(postData.length===0){
                    return false;
                }
                // 如果传入的参数是1个，则认为是 传递了删除参数
                if(postData.length===1){
                    // 将要删除的那个参数赋值 给 deleteId，并postData设置为空
                    let deleteId = postData;
                    postData = "";
                    console.log("要删除的值是: "+deleteId);
                    fs.readFile('./text.json',function(err,data){
                        if(err){
                            return console.error(err);
                        }
                        var jsonStr = data.toString();//数据 转换为json字符串
                        var json = JSON.parse(jsonStr);//json字符串转换为json对象
                        //从json字符串中遍历，如果找到了要删除的那个值，就从数组里删除它
                        for(var i=0; i<json.message.length; i++){
                            if(json.message[deleteId]===json.message[i]){
                                json.message.splice(deleteId,1);
                            }
                        }
                        var str = JSON.stringify(json);//json对象转换为字符串
                        console.log(str);
                        fs.writeFile('./text.json',str,{flag:'w'},err=>{
                            if(!err){
                                console.log("数据删除成功");
                            }else{
                                console.log("数据删除失败");
                            }
                        })
                    })
                    return false;
                }
                addMessage()
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
// 添加留言函数
function addMessage(){
    fs.readFile('./text.json',function(err,data){
        if(err){
            return console.error(err);
        }
        var jsonStr = data.toString();// 将二进制转为json字符串
        var json = JSON.parse(jsonStr);// 将json字符串转换为json对象
        var post = JSON.parse(postData);// 传进来的post数据是json字符串，转换为json对象
        json.message.push(post);
        var str = JSON.stringify(json);// json对象转换为json字符串
        fs.writeFile('./text.json',str,{flag:'w'},err=>{
            if(!err){
                console.log('数据写入成功');
                console.log("postData:"+postData);
                // 数据添加成功后，postData重置为空。
                postData = "";
            }else{
                console.log('数据写入失败');
            }
        })
    })
}

// 删除留言函数
function deleteMessage(){

}

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
