var type = 0;      //类型，0为实心，1为空心
var str;        //字符：*或#等
var wide;       //宽,控制列数
var hight;       //高，控制行数
var hang;        //行，控制回字的里面，控制列数
var line;        //列，控制回字的里面，控制行数
var c="";

//矩形
function juxing(type,str,wide,hight){
    if(type == 0) {
        for (var a = 0; a < hight; a++) {
            for (var b = 0; b < wide; b++) {
                c += str + " ";
            }
            c += "\n";
        }
        console.log(c);
    }else{
        for (var a = 0; a < hight; a++) {
            for (var b = 0; b < wide; b++) {
                if((b == 0) || (b == wide-1) || (a == 0) || (a == hight-1)){
                    c += str + " ";
                }else {
                    c += "  ";
                }
            }
            c += "\n";
        }
        console.log(c);
    }
}

//三角形
function sanjiao(type,str,hight){
    if(type == 0) {
        for (var a = 1; a <= hight; a++) {
            for (var b = 1; b <= hight - a; b++) {
                c += "  ";
            }
            for (var d = 1; d <= (2 * a - 1); d++) {
                c += str + " ";
            }
            c += "\n";
        }
        console.log(c);
    }else{
        for (var a = 1; a <= hight; a++) {
            for (var b = 1; b <= hight - a; b++) {
                c += "  ";
            }
            for (var d = 1; d <= (2 * a - 1); d++) {
                if(d == 1 || a == hight || d == 2*a-1){
                    c += str + " ";
                }else {
                    c += "  ";
                }
            }
            c += "\n";
        }
        console.log(c);
    }

}

//菱形
function linxing(type,str,hight) {
    if(type == 0) {
        //实心菱形
        for (var a = 1; a <= hight; a++) {
            for (var b = 1; b <= hight - a; b++) {
                c += "  ";
            }
            for (var d = 1; d <= (2 * a - 1); d++) {
                c += str + " ";
            }
            c += "\n";
        }
        for (var a = hight-1; a > 0; a--) {
            for (var b = 1; b <=hight - a; b++) {
                c += "  ";
            }
            for (var d = 1; d <= (2 * a - 1); d++) {
                c += str + " ";
            }
            c += "\n";
        }
        console.log(c);
    }else {
        //空心菱形
        for (var a = 1; a <= hight; a++) {
            for (var b = 1; b <= hight - a; b++) {
                c += "  ";
            }
            for (var d = 1; d <= (2 * a - 1); d++) {
                if(d == 1 || d == 2*a-1){
                    c += str + " ";
                }else {
                    c += "  ";
                }
            }
            c += "\n";
        }
        for (var a = hight-1; a > 0; a--) {
            for (var b = 1; b <=hight - a; b++) {
                c += "  ";
            }
            for (var d = 1; d <= (2 * a - 1); d++) {
                if(d == 1 || a == hight || d == 2*a-1  ){
                    c += str + " ";
                }else {
                    c += "  ";
                }
            }
            c += "\n";
        }
        console.log(c);
    }
}

//回字
function huizi(str,hight){
    for (var a = 0; a < hight; a++) {
        for (var b = 0; b < hight; b++) {
            if((b == 0) || (b == hight-1) || (a == 0) || (a == hight-1)){
                c += str + " ";
            }else if(a==2 && (b>=2&&b<=hight-3) || (a==hight-3) && (b>=2&&b<=hight-3) || b==2 && (a>=2&&a<=hight-3) || (b==hight-3) && (a>=2&&a<=hight-3)){
                c += str + " ";
            }else {
                c += "  ";
            }

        }
        c += "\n";

    }
    console.log(c);
}

//梯形
function tixing(str,hight,wide) {
    for (var a = 1; a <= hight; a++) {
        for (var d = 1; d <= wide+(a-1); d++) {
            c += str + " ";
        }
        c += "\n";
    }
    console.log(c);
}

juxing(1,"&",10,5);   //矩形
//sanjiao(1,"*",10);     //三角形
//linxing(1,"*",5);      //菱形
//huizi("*",10);      //回字
//tixing("*",5,5) //矩形