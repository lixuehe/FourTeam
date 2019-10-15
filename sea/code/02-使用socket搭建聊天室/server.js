var net = require('net');
var clientList = [];
var num = 0;
var server = net.createServer(function (socket){
    clientList.push(socket);
    var socketNum = ++num;
    socket.write('成功!\r\n');
    socket.on('data',function(data){
        console.log(data.toString());
        broadcast(data);
    });
    //如果有会话结束,则执行下面的代码块
    socket.on('end',function(){
        console.log(socketNum+"号客户端结束");
        clientList.splice(clientList.indexOf(socket));
        // console.log(clientList.length);
        //如果连接数为0,则关闭服务端
        if(socket.server._connections ==0){
            socket.write("88");
        }
    });
});

// 广播函数
function broadcast(data){
    for(var i=0; i<clientList.length; i++){
        clientList[i].write(data);
    }
}

server.listen(1337, '127.0.0.1');