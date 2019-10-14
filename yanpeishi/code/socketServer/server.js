var net = require('net');
var clientList=[];

var server = net.createServer(function(socket){
    clientList.push(socket);
    socket.write('成功连接到服务器 \r\n');

    socket.on('data',function(data){
        console.log(data.toString());
	broadcast(data);
    });
    socket.on('end',function(){
  	   
	  for(var j=0;j<=clientList.length;j++){
		  if(socket.end()==clientList[j]){
			  clientList.splice(j,1);
		  }
	  }
	//	var a = clientList.indexOf(socket);
	//
	//	         clientList.splice(a,1);


    });
   
});
function broadcast(data){
	for(var i=0;i<clientList.length;i++){
		clientList[i].write(data);
	}
}

server.listen(1337,'127.0.0.1'); 
