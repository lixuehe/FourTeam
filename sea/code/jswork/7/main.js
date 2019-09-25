'use strict';

var readline = require('readline');
var print = require('./print');
var  rl = readline.createInterface(process.stdin, process.stdout);

/*
*  方法setPromat(promat)，就是给每一行设置一个提示符，就好比window命令行的> ，我们这里设置的是Test>
*  promat()可以算是最重要的方法了，因为它才体现了Readline的核心作用，以行为单位读取数据，premat方法就是在等待用户输入数据
*  这里又监听了’line’ 事件，因为promat方法调用一次就只会读取一次数据，所以，在这个方法又调用了一次promat方法，这样就可以继续读取用户输入，从而达到一种命令行的效果
*/

rl.setPrompt('Test> ');
rl.prompt();

rl.on('line', function(line) {
    switch(line.trim()) {
        case 'help':
            console.log("0.退出")
            console.log("1.正方形");
            console.log("2.三角形");
            console.log("3.菱形");
            console.log("4.回形");
            console.log("5.梯形");
            break;
        case '1':
            console.log('打印正方形');
            rl.question('请输入正方形的边长: ', function(answer){
                console.log(answer);
                rl.question('请输入填充图案: ', function(str){
                    console.log(str);
                    rl.question('是否空心?(0为实心,1为空心): ', function(n){
                        console.log(n);
                        print.printzf(answer,str,n);
                        rl.close();
                    });
                });
            });
            break;
        case '2':
            console.log('打印三角形');
            rl.question('请输入三角形的高度: ', function(answer){
                console.log(answer);
                rl.question('请输入填充图案: ', function(str){
                    console.log(str);
                    rl.question('是否空心?(0为实心,1为空心): ', function(n){
                        console.log(n);
                        print.printsj(answer,str,n);
                        rl.close();
                    });
                });
            });
            break;
        case '3':
            console.log('打印菱形');
            rl.question('请输入菱形的高度: ', function(answer){
                console.log(answer);
                rl.question('请输入填充图案: ', function(str){
                    console.log(str);
                    rl.question('是否空心?(0为实心,1为空心): ', function(n){
                        console.log(n);
                        print.printlx(answer,str,n);
                        rl.close();
                    });
                });
            });
            break;
        case '4':
            console.log('打印回字');
            rl.question('请输入回形的边长: ', function(answer){
                console.log(answer);
                rl.question('请输入填充图案: ', function(str){
                    console.log(str);
                    print.printhx(answer,str);
                    rl.close();
                });
            });
            break;
        case '5':
            console.log('打印梯形');
            rl.question('请输入梯形的高度: ', function(answer){
                console.log(answer);
                rl.question('请输入填充图案: ', function(str){
                    console.log(str);
                    rl.question('是否空心?(0为实心,1为空心): ', function(n){
                        console.log(n);
                        print.printtx(answer,str,n);
                        rl.close();
                    });
                });
            });
            break;
        case 'exit':
            rl.close();
            break;
        case '0':
            rl.close();
            break;
        default:
            console.log('没有找到命令,请输入help查看帮助!');
            break;
    }
    rl.prompt();
});

rl.on('close', function() {
    console.log('bye bye!');
    process.exit(0);
}); 