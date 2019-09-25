var input = prompt("请输入登陆邮箱：");
//var arr = [qq.com:"腾讯邮箱";]
var index = input.indexOf("@");
////var yu = input.lastIndexOf(".");
var name = input.slice(0,index);
var address = input.slice(index+1,input.length-4);
var arr = {"qq":"QQ邮箱","163":"网易邮箱","sina":"新浪邮箱","gmail":"谷歌邮箱","123":"某某某"};
if(arr[address]){
	document.write("邮箱的用户名是："+name+"<br/>");
	document.write("登录的邮箱公司是："+arr[address]);
	}else{
		document.write("邮箱不存在！");
	}





/*var str="123@126.com;124@qq.com;125@con.cn";
		var reg = /^((([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6}\;))*(([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})))$/;
		if(reg.test(str)){
			alert("邮箱存在！");
		}else{
			alert("邮箱不存在！");
		}*/