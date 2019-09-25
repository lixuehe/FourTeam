var arr = new Array ("images/play01.jpg","images/play02.jpg","images/play03.jpg","images/play04.jpg","images/play05.jpg","images/play06.jpg");
var index = 0;
var timer = null;
//窗口加载完毕，调用匿名函数
window.onload = function(){
	timer = setInterval("change()",2000);
}

//图片切换的函数
function change(){
	right();
}
function circlestart(){
	var circlearr = document.getElementById("circle_list").children;
	//先将之前的样式去掉
	for(var i=0;i<circlearr.length;i++){
		circlearr[i].className = "circle";
	}
	//给当前选中的元素添加样式
	circlearr[index].className = "circle focus";
	if(index>arr.length-1){
		index = 0;
	}
}

function onclickOver(i){
	//clearInterval(timer);
	mouseOver();
	index = i;      
	 document.getElementById("myimg").src=arr[index];

	 circlestart();

	console.info("i = "+i);
	console.info("index="+index);
}
//鼠标移入事件
function mouseOver(){
	clearInterval(timer);
	//circlestart();
}	
function mouseOut(){
	 timer =setInterval("change()",2000);                                    
}
function left() {
 	index--;
 	if(index<0){
 		index = arr.length-1;
 	}
 	document.getElementById("myimg").src=arr[index];
 	circlestart();
}
function right(){
	index++;
	if(index>arr.length-1){
		index = 0;
	}
	
	document.getElementById("myimg").src=arr[index];
	circlestart();
}