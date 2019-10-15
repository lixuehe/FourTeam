function printRow(str,count){
    var str1 = str;
    for(var i=1; i<count; i++){
            str +=str1;
    }
    return str;
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
                str = printRow(str2,(str1.length+high-1));
            }else{
                // 不是第一行也不是第九行的话,每次往下循环加1个空格
                //空格数等于上一行字符串str的长度减1
                str = printRow(str2)+printRow(" ",str.length-1)+printRow(str2);
            }
            console.log(str);
        }
    }
}

printtx(20,"$$$$",1);