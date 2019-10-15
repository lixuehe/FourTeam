'use strict';

// 打印正方形   接收参数,边长,符号
function printzf(edge,str1){
        console.log("打印正方形");
        var str = str1;
        // 横向输出十次,然后竖向输出
        for (var i=0; i<edge;i++){
                for(var j=0; j<edge; j++){
                        if(str.length<edge){
                                str +=str1;
                        } else {
                                break;
                        }
                }
                console.log(str);
        }
        console.log("--------------------------------------");
}
//打印三角形,接收参数,三角形的高度
function printsj(high,str1){
        console.log("打印三角形");
        var str = str1;
        for(var i=0; i<high; i++){
                console.log(str);
                str+=str1;
        }
console.log("--------------------------------------");
}
//打印菱形
function printlx(high,shape){
        console.log("打印菱形");
        if(high % 2==0){
                console.log("请输入奇数");
                return false;
        }
        var strOn = shape;  // 上半部分
        var strUn = shape;  // 下半部分
        var cutStr = 2;// 减去的字符串
        var cutSpace = 1;// 减去的空格 
        var space8 = "        "; //8个空格
        // 输入第一次
        console.log(space8+strOn);
        for(var i = 0; i<high; i++){
                //每次循环空格数减去四个然后拼接@符号,@符号每次加2
                // 如果str字符串小于9,-+@
                if(strOn.length < high){
                    strOn +=shape+shape;
                    space8 = space8.substr(0,space8.length-cutSpace);
                    console.log(space8+strOn);
                }else if(strOn.length ==high){
                    strUn = strOn.substr(0,strOn.length-cutStr);
                    cutStr+=2;
                    space8 +=" ";
                    console.log(space8+strUn);
                }
    }
        console.log("--------------------------------------");
}
// 打印梯形 梯形的高度
function printtx(high,str1){
        console.log("打印梯形");
        if(str1.length < 1){
                console.log("开头必须大于1");
                return false;
        }else {
                var str = str1;
        }
        for(var i=0; i<high; i++){
                console.log(str);
                // 每次往下循环加1个字符
                str+=str1.substr(0,str1.length-(str1.length-1));
        }
        console.log("--------------------------------------"); 
}
//封装打印行的函数
function printRow(str,count){
        var str1 = str;
        for(var i=1; i<count; i++){
                str +=str1;
        }
        return str;
}

//打印回字
function printhx(high,shape){
        //打印回形
        console.log("打印回形");
        var str = shape;
        var result = "";
        for(var i=0; i<high; i++){
                //0等于第一行,high是最后一行
                if(i==0||i==high-1){
                        result = printRow(str,high);
                        //high-2是倒数第二行
                }else if(i==1||i==high-2){
                        result = printRow(str)+printRow(" ",high-2)+printRow(str);
                        //high-3倒数第三行
                }else if(i ==2 || i==high-3){
                        result = printRow(str)+printRow(" ")+printRow(str,high-4)+printRow(" ")+printRow(str);
                }else if(i==3|| i==4 || i==5 || i==6){
                        result = printRow(str)+printRow(" ")+printRow(str)+printRow(" ",high-6)+printRow(str)+printRow(" ")+printRow(str);
                }
        console.log(result);
        }
}



printzf(5,"+");      //正方
printsj(5,"+");      //三角
printtx(5,"###"); //梯形
printlx(5,"0");      //菱形
printhx(7,"0");      //回形
