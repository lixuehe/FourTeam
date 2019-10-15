'use strict';
//封装打印行的函数
function printRow(str,count){
        var str1 = str;
        for(var i=1; i<count; i++){
                str +=str1;
        }
        return str;
}

// 打印正方形   接收参数,边长,符号,是否空心,0为实心,1为空心
function printzf(edge,str1,n){
        // console.log("打印正方形");
        var str = str1;
        var result = "";
        // 横向输出十次,然后竖向输出
        for (var i=0; i<edge;i++){
                if(n==0){
                    for(var j=0; j<edge; j++){
                            if(str.length<edge){
                                    str +=str1;
                            } 
                    }
                console.log(str);
                } else {
                    // console.log("这是一个空心的");
                    for(var j=0; j<edge; j++){
                        if(str.length<edge){
                                str +=str1;
                        }
                        if(i==0||i==edge-1){
                            result = printRow(str1,edge);
                        }else if(i==1||i==2){
                            result = printRow(str1)+printRow(" ",edge-2)+printRow(str1);
                        }
                    }
                console.log(result);
                }
        }
        console.log("--------------------------------------");
}
//打印三角形,接收参数,三角形的高度
function printsj(high,str1,n){
        console.log("打印三角形");
        var str = str1;
        var result = "";
        if(n==0){
            for(var i=0; i<high; i++){
                    console.log(str);
                    str+=str1;
            }
        }else{
            // console.log("打印空心三角形");
            for(var i=0; i<high; i++){
                if(i==0||i==1||i==high-1){
                    result = str;
                }else{
                    result = printRow(str1)+printRow(" ",i-1)+printRow(str1);
                }
                console.log(result);
                str +=str1;
            }
        }
    console.log("--------------------------------------");
}

//打印菱形
function printlx(high,str,n){
        console.log("打印菱形");
        if(high % 2==0){
                console.log("高度不能为偶数,请输入奇数");
                return false;
        }
        if(high <= 3){
                console.log("请输入比3大的奇数");
                return false;
        }
        var strOn = str;  // 上半部分
        var strUn = str;  // 下半部分
        var cutStr = 2;// 减去的字符串
        var addSpace = 3;
        var InSpaceUn = 4;
        var space = printRow(" ",high); //空格
        // 输出第一行
        console.log(space+strOn);
        if(n==0){
            for(var i = 0; i<high; i++){
                    //每次循环空格数减去四个然后拼接@符号,@符号每次加2
                    // 如果str字符串小于9,-+@
                    if(strOn.length < high){
                        strOn +=str+str;
                        //每次减去一个空格
                        space = space.substr(0,space.length-1);
                        console.log(space+strOn);
                        //如果到了下半部分,则每次减去两个字符串和自增一个空格
                    }else if(strOn.length ==high){
                        strUn = strOn.substr(0,strOn.length-cutStr);
                        cutStr+=2;
                        space +=" ";
                        console.log(space+strUn);
                    }
            }
        }else{
            for(var i = 0; i<high; i++){
                //上半部分
                if(strOn.length < high){
                    strOn +=str+str;
                    space = space.substr(0,space.length-1);
                    //如果strOn的长度等于3(输出到第二行)
                    if(strOn.length==3){
                        strOn = printRow(str)+printRow(" ")+printRow(str);
                        //第三行或其它行,每次加两个空格
                    }else{
                        strOn = printRow(str)+printRow(" ",addSpace)+printRow(str); 
                        //每次中间加两个空格
                        addSpace+=2;
                    }
                    console.log(space+strOn);
                //下半部分
                }else if(strOn.length ==high){
                    strUn = strOn;
                    strUn = printRow(str)+printRow(" ",strOn.length-InSpaceUn)+printRow(str);
                    InSpaceUn+=2;
                    space +=" ";
                    console.log(space+strUn);
                    //如果strUn中的字符空格只有一个时,(等于第二行(@空格@)共三个字符)则跳出循环
                    if(strUn.length==3){
                        break;
                    }
                }
        }
        //输出最后一行
        space +=" ";
        console.log(space+str);
        console.log("--------------------------------------");
        }
}
// 打印梯形 梯形的高度
function printtx(high,str1,n){
        console.log("打印梯形");
        if(str1.length <= 1){
                console.log("必须两个字符以上为开头,如**");
                return false;
        }else {
                var str = str1;
        }
        //从str1截取一个字符赋值给str2
        var str2 = str1.substr(0,1);
        if(n==0){
            for(var i=0; i<high; i++){
                    console.log(str);
                    // 每次往下循环加1个字符
                    str+=str1.substr(0,str1.length-(str1.length-1));
            }
        console.log("--------------------------------------"); 
        }else{
            for(var i=0; i<high; i++){
                if(i==0){
                    //如果到最后一行
                }else if(i==high-1){
                    //最后一行等于第一行的长度加总高度减1
                    str = printRow(str2,(str1.length+(high-1)));
                }else{
                    // 不是第一行也不是第九行的话,每次往下循环加1个空格
                    //空格数等于上一行字符串str的长度减1
                    str = printRow(str2)+printRow(" ",str.length-1)+printRow(str2);
                }
                console.log(str);
            }
        }
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

module.exports = {
        printzf: printzf,
        printsj: printsj,
        printlx: printlx,
        printhx:printhx,
        printtx:printtx
    };