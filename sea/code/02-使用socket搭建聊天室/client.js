var net = require('net');
var hostname = process.argv[2];
var port = process.argv[3];
var name = process.argv[4];
var client = net.connect({host:hostname,port: port},
    function() {
        console.log('连接服务器');
        process.stdin.setEncoding('utf8');

        process.stdin.on('readable', function(){
            var chunk = process.stdin.read();
            if (chunk !== null){
                client.write(name ? name+": "+ chunk : "游客: "+ chunk);
            }
        });
    });
    client.on('data', function(data){
        console.log(data.toString());
        // client.end();
    });
    client.on('end', function() {
        console.log('服务端断开连接');
    });