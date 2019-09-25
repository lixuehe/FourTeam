* 原生JS和jQuery入口函数的加载模式不同

  * 原生JS会等到DOM元素加载完毕，并且图片也加载完毕才会执行。
  * jQuery会等到DOM元素加载完毕，但不会等到图片也加载完毕执行。

* 原生的JJS如果编写了多个入口函数，后面编写的会覆盖前面编写的。

  `window.onload = function (ev) {    `

  `		alert("hello inj1");}`

  `window.onload = function (ev) {    `

  `	alert("hello inj2");}`

* jQuery中编写多个入口函数，后面的不会覆盖前面的

`$(document).ready(function(){    `

`alert("hello in1");})`

`$(document).ready(function(){    alert("hello in2");})`