
//1 统计字符串长度
function length(str){
    var str;
    var i;
    var count=0;
    /*
    for(i=0; ;i++){
        if(str[i] != null){
            count++;
        }else {
          return count;
        }
    }*/
    for(i in str){
        count++;
    }
    return count;
}
var len = length("hello");
//console.log(len);

//2 字符串搜索
function find(str,s){
    var str;
    var s;
    var i;
    for(i=0;i<length(str);i++){
        if(str[i]==s[0]){
            var str1 = jiequ(str,i,length(s));
            if(str1 ==s) {
                return i;
            }
        }
    }
    return -1;
}
var fi = find("adbdddewttfeg","d");
//console.log(fi);

//3 字符串截取
function jiequ(str,start,len){
    var str;
    var start;
    var len;
    var strend="";
    var i;
    for(i=0;i<length(str);i++){
        if(i>=start && i<(len+start)){
            strend += str[i];
        }
    }
    return strend;
}
var qu = jiequ("ggeewrier",1,2);
//console.log(qu);

//4 通过指定字符串字符合并数组为字符串
var arr = new Array(1,'e',3,4,5);
function hebin(arr,s){
    var arr;
    var s;
    var i;
    var str1="";
    var str2;
    for(i=0;i<length(arr);i++){
       str1 += arr[i]+s;
    }
    str2 = jiequ(str1,0,length(str1)-1);
    return str2;
}
var he = hebin(arr,"\\");
console.log(he);

//字符串切割，分割
function qiege(str,s) {
    var str;
    var s;
    var i;
    var arr = new Array();
    var len = length(str);
    var j=0;
    for(i=0;i<len;i++){
        var fi = find(str,s);
        //如果搜索的字符是全部字符的第一个
        if(fi == 0){
            str = jiequ(str,fi+length(s),length(str)-(fi+length(s)));
            arr[j] = str;
            //break;
        }
        if(fi > 0){
            arr[j] = jiequ(str,0,fi);
            str = jiequ(str,fi+length(s),length(str)-(fi+length(s)));
            j++;
        }
        if(fi == -1){
            arr[j] = str;
        }
    }
        return arr;

}
var qi = qiege("abcabcabcsebcd","bc");
//console.log(qi);


