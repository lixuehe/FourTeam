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
    // var result = "";
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

printzf(8,"!",0);