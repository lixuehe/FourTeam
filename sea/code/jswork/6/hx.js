//封装打印行的函数
function printRow(str,count){
        var str1 = str;
        for(var i=1; i<count; i++){
                str +=str1;
        }
        return str;
}


//打印回字
function printhx(shape,high){
        //打印回形
        var str = shape;
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

printhx("@",8);