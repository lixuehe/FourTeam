function showPic(whichpic) {
	if (!document.getElementById("placeholder")) {
		return false;
	}
	console.log("执行了showPic函数");
	//使用getAttribute获取a标签的值
	var source = whichpic.getAttribute("href");
	//获取id为placeholer的DOM节点
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	//将placeholder的src属性赋值为获取的a标签的值
	placeholder.setAttribute("src", source);
	if (document.getElementById("description")) {
		if (whichpic.getAttribute("title") != null){
			var text = whichpic.getAttribute("title");
		} else {
			var text = "This Value is null";
		}
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3){
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}
function popUp(winURL){
	window.open(winURL,"popup","width=1024,height=768");
	console.log("执行了popUp函数");
}

function prepareGallery(){
	if(!document.getElementById){
		console.log("退出");
		return false;
	}
	if(!document.getElementsByTagName){
		console.log("退出");
		return false;
	}
	if(!document.getElementById("imagegallery")) {
		console.log("退出");
		return false;
	}
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++){
		links[i].onclick = function(){
			console.log("执行了prepareGallery函数");
			return showPic(this) ? false : true;
		}
	}
}

function linkSeparate(){
	if (!document.getElementsByTagName) return fal;
	var lnks = document.getElementsByTagName("a");
	for (var i=0; i<lnks.length; i++){
		if (lnks[i].getAttribute("class") == "popup"){
			lnks[i].onclick = function(){
				popUp(this.getAttribute("href"));
				console.log(this.getAttribute("href"));
				console.log("执行了linkSeparate函数");
				return false;
			}
		}
	}
}

window.onload = function(){
	linkSeparate();
	prepareGallery();
}