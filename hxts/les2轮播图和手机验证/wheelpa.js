
var arr = new Array ("images/play01.jpg","images/play02.jpg","images/play03.jpg","images/play04.jpg","images/play05.jpg","images/play06.jpg");
var index = 0;
var timer = null;
//窗口加载完毕，调用匿名函数
window.onload = function(){
	timer = setInterval("change()",3000);
}

//图片切换的函数
function change(){
	right();
	// index++;
	// //切换图片
	// document.getElementById("myimg").src=arr[index];
	
	// //找到图片对应的circle,添加样式focus
	// circlestart();
}
function circlestart(){
	var circlearr = document.getElementById("circle_list").children;
	//先将之前的样式去掉
	for(var i=0;i<circlearr.length;i++){
		circlearr[i].className = "circle";
	}
	//给当前选中的元素添加样式
	circlearr[index].className = "circle focus";
	if(index == 5)
		index = -1;
}


//鼠标移入事件
function mouseOver(i){
	clearInterval(timer);
	
	// document.getElementById("myimg").src=arr[i];
	index = i;      
	// circlearr[i].className = "circle focus";
	 document.getElementById("myimg").src=arr[index];

	 circlestart();

	console.info("i = "+i);
	console.info("index="+index);

/*	index = i;
	var circlearr2 = document.getElementById("circle_list");
	var circlearr1=circlearr2.getElementsByTagName("span");
	var circlearr=[];
	for(var i=0;i<circlearr1.length;i++){
		circlearr.push(circlearr1[i]);
	}
	//clearInterval(timer);
	//index = i;	

	console.info("circlearr="+circlearr);
	//for(var i=0;i<circlearr.length;i++){
		if(circlearr[i]== "circle focus"){
			circlearr[i]= "";
		}
		if(index == i){
		circlearr[i].circlearr1 = "circle focus";
	
		}
		console.info("index="+index);
		console.info("i="+i);
		//clearInterval(timer);
	//}*/
}	
function mouseOut(){
	 timer =setInterval("change()",3000);                                    
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