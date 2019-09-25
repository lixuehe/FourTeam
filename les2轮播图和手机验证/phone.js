var input = prompt("请输入手机号：");
var myphone = /^[1][3,4,5,7,8][0-9]{9}$/;
if(myphone.test(input)){
	document.write(input+"手机号符合要求<br/>");
}else{
	document.write("请检查手机号是否正确！<br/>");
}

var years,months,days;
var intYears,intMonths,intDays;
var today;
today = new Date();   //系统当前时间
intYears = today.getFullYear(); //得到年份
intMonths = today.getMonth()+1;   //得到月份
intDays = today.getDate();   //得到天数
document.write(intYears+"年"+intMonths+"月"+intDays+"日");