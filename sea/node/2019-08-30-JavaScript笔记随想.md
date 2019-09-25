---
layout: post
title:  "JavaScript笔记随想"
date:   2019-08-30 15:25:26 +0800
tags:
      - 学习
---

#### 学了好几天JS,总结个笔记吧.免的以后忘了

* JS操作DOM
	```javascript
	document.getElementById("id");	//取id;
	document.getElementsByClassName("class"); //取类名
	document.getElementsByTagName("input");//取标签名
	document.getElementsByName("a"); //取标签的name值
	getAttribute//获取属性的名字
	setAttribute//对属性节点的值做出修改
	```


* 数组  
	和其它语言一样,数组分为两种,一种是索引数组,另一种是关联数组
	索引数组下标都是数字,0是第一个,1是第二个,以此类推
	关联数组下标可以是字符串也可以数字
	定义数组

	```javascript
	var arr = new Array(); //创建一个名为arr的数组
	//也可以这样
    var arr = [];	//创建一个名为arr的数组
	```

	填充数组
	```javascript
    arr[0] = "admin"
    arr[1] = "admin1"
    arr[2] = "admin2"
	```
	也可在声明数组时填充数组
	```javascript
	var arr = new Array("123", "456", "789");
	var arr = ["123", "456", "789"];
	
	```
	访问数组中的值
	```javascript
	var arr = ["123", "456", "789"];//索引数组
	alert(arr[0]);	//弹窗出值 123
	```
	
	```javascript
	var arr1 = [];//关联数组
	arr1["name"]="adminsb";
	arr1["age"]=1978;
	arr1"living"]=false;
	alert(arr1["name"]);	//访问索引为name的arr1(关联数组)的值.
	```
	
* 对象
	与数组类似,对象也是使用一个名字表示一组值.
	创建对象
	```javascript
    var obj =new Object(); 
  ```

	//也可以这样创建
	```javascript
    var obj = {} 
	```
	填充值
	```javascript
	obj.name = "sb";
	obj.age = 21;
	```
	
	创建时填充值
	```javascript
	var obj ={
		name:"sb",
		age:21
	}
	```
	访问对象的值
	```javascript
	alert(obj.name);
	```
	
* 条件语句
	if else语句
	```javascript
	if(条件){
		//条件满足执行的代码
	}else{
		//条件不满足执行的代码
	}
	```
	 如果条件==true 则执行代码块, 否则执行else块
	
	else if语句
	```javascript
	if(条件){
		//条件满足执行的代码
	}else if(条件){
		//条件满足执行的代码
	}else if(条件){
		//条件满足执行的代码
	}else{
		//如果上面的条件都不满足则执行本代码块.
	}
	```
	
* 循环语句
  		主要用来完成一些重复性的操作
    		主要分为几种,for,for in,while,do while
	```javascript
			//for:
    		for(语句1;语句2;语句3){
    			//要执行的代码块
    		}
    		for(var i=0; i<10; i++){
    			console.log(i);	//打印0到9的值
    		}
    ```
    
	```javascript
    		//for in:主要用来遍历数组或对象的属性:
    		var arr = {name:"admin", age:"20", sex:"man"}
    		for(x  in arr){
    			console.log(arr[x]);
    		}
    ```
    
    ```javascript
    		//while: 和for循环差不多
    		while(条件){
    			//执行的代码块
    		}
    		//如果条件为false,则不再执行代码块
    		while(i<10){
    			console.log(i);
    			i++;//如果i<10,不写i++时,这个循环就是死循环了,所以要每次循环的时候都把i的值自增1
    		}
    ```
    ```javascript
    		//do while和while的区别是,即使条件不满足,也会执行一次代码块,因为代码块是在条件语句判断前执行
    		var i =1;
    		do {
    			console.log("i的值为"+i);
    			i++;
    		}while(i<5){
    			console.log(i);
    		}
    ```
* 逻辑运算符
		&& 逻辑与(and). 前后两个结果必须是真,则返回真, 如果前后有一项结果为假,则返回假
		|| 逻辑或(or).	前后两个结果只要有一个为真,则返回真, 除非前后两个结果都是假,才返回假,否则	    返回真
		! 逻辑非(not),把假转换为真,把真转换为假  
		<= 小于或等于
		>= 大于或等于
		===恒等,值,类型都相同
		==等同,值相同
	
* JS字符串
	JS不用声明变量的类型,你给它什么值,它就是什么类型的
	 ```javascript
	var a = 0;	//a是一个int类型的变量
	var b = "0"; //b是一个string类型 如果条件==true 则执行代码块, 否则执行else块的变量
	 ```
	
	字符串拼接
	 ```javascript
	var a = "123";
	var b = "456";
	console.log(a+b);
	 ```
	
* 函数
	定义函数
	```javascript
	function 函数名(){
		//代码块
	}
	
	example:
	function test(i){
		console.log(i);	//定义一个test函数,接收一个值,调用这个函数时打印这个值
	}
	```
	```javascript
	//调用函数
	test("a"); //控制台里打印值 a
	```
* 函数的返回值.  
		1. 函数不仅能够(以参数的形式,接收数据,还能够返回数组)  
		2. 函数能把结果返回给调用这个函数的语句  
		return xxx;
	```javascript
	example:
	function test(i){
		return i;	//定义一个test函数,接收一个值,谁调用这个函数,就把变量i返回给那个函数
	}
	```

* 变量的作用域
	1. 在函数外var 声明的变量,则为全局变量
	2. 在函数内var 声明的变量,则为局部变量
	3. 全局变量 可以在脚本的任意位置被引用.全局变量的作用域是整个脚本
	4. 局部变量 只存在用声明它的那个函数的内部,在函数外是无法引用的.
```

```