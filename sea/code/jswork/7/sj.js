//封装打印行的函数
function printRow(str,count){
    var str1 = str;
    for(var i=1; i<count; i++){
            str +=str1;
    }
    return str;
}
//打印三角形,接收参数,三角形的高度
function printsj(high,str1,n){
    console.log("打印三角形");
    var str = str1;
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

printsj(10,"@",0);