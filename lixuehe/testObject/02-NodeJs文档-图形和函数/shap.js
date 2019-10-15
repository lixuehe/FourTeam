/*
    打印正方形  shap1
    type:0--空心；1--实心
    str:填充内容
    line:边长
*/
function shap1(type,str,line){
    var type;
    var str;
    var line;
    var res="";
    //打印实心正方形
    if(type==1){
        for(var i=0;i<line;i++){
            for(var j=0;j<line;j++){
                res+=str+" ";
            }
            res+="\n";
        }
        console.log(res);
    }
    //打印空心正方形
    else{
        for(var i=0;i<line;i++){
            if(i==0 || i==line-1){
                for(var j=0;j<line;j++){
                    res+=str+" ";
                }
                res+="\n";
            }else{
                for(var j=0;j<line;j++){
                    if(j==0 || j==line-1){
                        res+=str+" ";
                    }else{
                        res+="  ";//需要输入两个空格，因为res=res+=str+" "时，是另个空格，如果不打印两个空格，就会错位
                    }
                }
                res+="\n";
            }

        }
        console.log(res);
    }
}
/*
    打印三角形  shap2
    type:0--空心；1--实心
    str:填充内容
    line:高度
*/
function shap2(type,str,line){
    var type;
    var str;
    var line;
    var res="";
    //打印实心三角形
    if(type==1){
        for(var i=1;i<=line;i++){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                res+=str+" ";
            }
            res+="\n";
        }
        console.log(res);
    }
    //打印空心三角形
    else{
        for(var i=1;i<=line;i++){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                if(z==1 || z==(2*i-1) || i==line){
                    res+=str+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        console.log(res);
    }
}
/*
    打印菱形  shap3
    type:0--空心；1--实心
    str:填充内容
    line:长的对角线的长度
*/
function shap3(type,str,line) {
    var type;
    var str;
    var line;
    var res = "";
    //打印实心菱形
    if (type == 1) {
        //按照三角形的套路，打印两个三角形进行上下拼接
        for(var i=1;i<=line;i++){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                res+=str+" ";
            }
            res+="\n";
        }
        for(var i=line-1;i>=1;i--){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                res+=str+" ";
            }
            res+="\n";
        }
        console.log(res);
    }
    //打印空心菱形
    else{
        for(var i=1;i<=line;i++){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                if(z==1 || z==(2*i-1)){
                    res+=str+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        for(var i=line-1;i>=1;i--){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                if(z==1 || z==(2*i-1)){
                    res+=str+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        console.log(res);
    }
}
/*
    打印回字形  shap4
    str:填充内容
    line:边长
*/
function shap4(str,line){
    var str;
    var line;
    var res="";
    for(var i=1;i<=line;i++){
        for(var j=1;j<=line;j++){
            if(i==1 || i==line ||j==1||j==line){
                res+=str+" ";
            }
            else if(i==3 && j>=3 && j<=line-2){
                res+=str+" ";
            }
            else if(i==line-2 && j>=3 && j<=line-2){
                res+=str+" ";
            }
            else if(j==3 && i>=3 && i<=line-2){
                res+=str+" ";
            }
            else if(j==line-2 && i>=3 && i<=line-2){
                res+=str+" ";
            }
            else{
                res+="  ";
            }
        }
        res+="\n";
    }
    console.log(res);
}
/*
    打印梯形  shap5
    type:0--空心；1--实心
    str:填充内容
    width:上底宽度
    line:高度
*/
function shap5(type,str,width,line){
    var type;
    var str;
    var width;
    var line;
    var res="";
    //打印实心梯形
    if(type==1){
        for(var i=1;i<=line;i++){
            //首先打印空格的内容
            for(var j=1;j<=line-i;j++){
                res+="  ";  //首先打印空格的内容
            }
            //打印梯形的内容
            for(var j=1;j<=width+2*(i-1);j++){
                res+=str+" ";
            }
            res+="\n";
        }
        console.log(res);
    }
    //打印空心梯形
    else{
        for(var i=1;i<=line;i++) {
            //首先打印空格的内容
            for (var j = 1; j <= line - i; j++) {
                res += "  ";
            }
            //打印空心梯形
            for(var j=1;j<=width+2*(i-1);j++){
                if(i==1 ||i==line||j==1||j==width+2*(i-1)){
                    res+=str+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        console.log(res);
    }
}
//打印正方形
// shap1(1,'@',6);
// shap1(0,'*',6);
// console.log("----------------------------");
//打印三角形
// shap2(1,'#',6);
// shap2(0,'#',6);
// console.log("-----------------------------");
//打印菱形
 //shap3(0,'*',6);
// shap3(0,'*',6);
 //console.log("-----------------------------");
//打印回字
 shap4('*',8);
// console.log("-----------------------------");
//打印梯形
//  shap5(0,'*',3,5);
// shap5(0,'*',5,7);
