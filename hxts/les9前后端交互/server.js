'use strict';   //严格模式，变量必须先声明，后执行。
var fs = require('fs'),
  url = require('url'),
  path = require('path'),
  http = require('http');
const crypto = require('crypto');
const hash = crypto.createHash('md5');
//从命令行获取root目录，默认是当前目录
var root = path.resolve('.'); //
var server = http.createServer(function (request,response){
  //获取url的path,n

  response.writeHead(200,{
    "Access-Control-Allow-Origin":"*",
  });
  var pathname = url.parse(request.url).pathname;
  //获取对应的本地文件路径
  var filepath = path.join(root,pathname);
  console.log(filepath);
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
  if(request.method=="POST" ){
    request.on('data',function (data) {
      //console.log("计算、接受到数据");
      //console.log("服务接受到的数据是："+data+"/");
        var datas = data + "/";
        //console.log(array[i]);
        var username = datas.substring(datas.indexOf("名")+2,datas.indexOf("电"));
        var phone =datas.substring(datas.indexOf("话")+2,datas.indexOf("密"));
        var pass = datas.substring(datas.indexOf("码")+2,datas.indexOf("邮"));
        var email =datas.substring(datas.indexOf("箱")+2,datas.indexOf("日"));
        var tar = datas.substring(datas.indexOf("期")+1);
      // 可任意多次调用update():
      //hash.update(pass);
      //console.log(hash.digest('hex'));
     // pass = hash.digest('hex');
      var content = pass;
      var secretKey = crypto.randomBytes(16).toString('hex');
      pass = crypto.createHmac('sha1', secretKey).update(content).digest().toString('base64');
      data = "姓名:"+username+"电话:"+phone+"密码:"+pass+"邮箱:"+email+"日期"+tar;
      //console.log(data);
      fs.appendFile('some.txt', data, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log("数据是："+data);
        }
      });
    });
    response.end("写入数据成功");
  }


});
server.listen(8080);
console.log('Server is running at http：//127.0.0.1：8080/');
