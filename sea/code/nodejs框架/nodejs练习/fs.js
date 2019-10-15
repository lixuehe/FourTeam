'use strict';

var fs = require('fs');

/* fs.readFile('sample.txt', 'utf-8', function (err, data){
    if (err) {
        console.log(err);
        console.log("错误");
    } else {
        console.log(data);
        console.log("正常输出");
    }
}) */
/* fs.readFile('sample.png', function (err, data){
    if (err){
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + 'bytes');
        var text = data.toString('utf-8');
        console.log(text);
        console.log("读取成功");
    }
}) */

// var data = fs.readFileSync('sample.txt', 'utf-8');
// console.log(data);

/* try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err);
    console.log("读取文件错误");
} */

/* var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err){
    if (err){
        console.log(err);
    } else {
        console.log('ok')
    }
}) */

/* fs.readFile('output.txt', 'utf-8', function (err,data){
    if (err){
        console.log(err);
    } else {
        console.log(data);
    }
}); */

/* try{
    var data = fs.readFileSync('output.txt','utf-8');
    console.log(data);
} catch(err) {
    console.log(err);
} 

var data = "This is a test";
fs.writeFile('output.txt',data, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log(ok);
    }
})*/


/* var data = "This is a test";
fs.writeFile('output.txt',data, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('ok');
    }
}) */

/* var data = "this is a test2";
try {
    fs.writeFileSync('output.txt',data); 
    console.log("ok");
}catch(err){
    console.log(err);
} */


/* fs.stat('sample.txt', function (err, stat){
    if (err){
        console.log(err);
    } else {
        // 是否是文件
        console.log('isFile: ' + stat.isFile());
        // 是否是目录
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            console.log('size: ' + stat.size);
            console.log('birth time: ' +stat.birthtime);
            console.log('modified time: ' + stat.mtime);
        }
    }
}) */
/* try {
    var test = fs.statSync('sample.txt', 'utf-8') ;
    console.log('isFile: ' + test.isFile());
    // 是否是目录
    console.log('isDirectory: ' + test.isDirectory());
    if (test.isFile()) {
        console.log('size: ' + test.size);
        console.log('birth time: ' +test.birthtime);
        console.log('modified time: ' + test.mtime);
    }
} catch(err) {
    console.log(err);
} */