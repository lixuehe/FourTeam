'use strict';
var
    fs=require('fs'),
    url=require('url'),
    http=require('http'),
    path=require('path');
const crypto = require('crypto');
var root=path.resolve(process.argv[2] || '.');
var server=http.createServer(function(request,response){
    response.writeHead(200,{
        "Access-Control-Allow-Origin":"*",
    });
    
    var pathname=url.parse(request.url).pathname;
    var filepath=path.join(root,pathname);
    fs.stat(filepath,function (err,stats) {      
        if (!err && stats.isFile()) {
            response.writeHead(200,{'Content-Type':'text/html'+';'+'charset= utf-8'});
            fs.createReadStream(filepath).pipe(response);
        } else {
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
    //当服务接收到数据后,将数据存入文件  
    if(request.method=='POST'){
        request.on("data",function(data){             
            data=data.toString(); 
            //写入文件,需要通过截取再拼接的方式对字符串进行加密
            var indexPass=data.indexOf("pass")+5;
            var indexDate=data.indexOf(",date");
            var name=data.slice(0,indexPass);
            var pass=data.slice(indexPass,indexDate);
            var date=data.slice(indexDate);
            //对密码进行加密
            const hash = crypto.createHash('md5');
            hash.update(pass);
            pass=hash.digest('hex')
            data=name+pass+date;        
            fs.appendFile('jqueryJob.txt', data, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('数据写入成功！');
                }
            });
        }); 
        response.end("恭喜您,注册成功!");   
    }              
});
server.listen(2222);
console.log("ok!");



