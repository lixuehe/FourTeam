//封装打印行的函数
function printRow(str,count){
    var str1 = str;
    for(var i=1; i<count; i++){
            str +=str1;
    }
    return str;
}

//打印菱形
function printlx(high,str,n){
    console.log("打印菱形");
    if(high % 2==0){
            console.log("请输入奇数");
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
// printlx(99,"#",1);