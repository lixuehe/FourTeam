function showPic(whichpic){
	//使用getAttribute获取a标签的值
	var source = whichpic.getAttribute("href");
	console.log(source);
	//获取id为placeholer的DOM节点
	var placeholder = document.getElementById("placeholder");
	//将placeholder的src属性赋值为获取的a标签的值
	placeholder.setAttribute("src",source);
}
