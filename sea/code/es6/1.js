/*let a = 10;
var b = 1;
console.log(a);
console.log(b);*/

/*for (let i=0; i<10; i++){
	console.log(i);
}*/

/*var a = [];
for(let i=0; i<10; i++){
	a[i] = function () {
		console.log(i);
	};
}
a[6]();*/

/*for (let i = 0; i < 3; i++){
	let i = 'abc';
	console.log(i);
}*/
/*
console.log(foo);
var foo = 2;

let bar = 2;
console.log(bar);*/
/*
var tmp = 123;

if(true){
	let tmp;
	tmp = 'abc';
	console.log(tmp);
}*/
/*
typeof x;
let x;*/

/*function bar(x = 2, y = x) {
	console.log([x, y]);
}
bar();*/

/*function func(arg){
	let arg;
}
func();*/

/*function func(arg){
	{
		let arg;
	}
}
func();*/

/*var tmp = new Date();

function f(){
		console.log(tmp);
		if(false){
			var tmp = 'hello world';
		}
}
f();*/
/*

var s = 'hello';

for (var i=0; i<s.length; i++){
	console.log(s[i]);
}
console.log(i);*/

/*
function f1(){
	let n = 5;
	if (true) {
		let n = 10;
	}
	console.log(n);
}
f1();
*/

/*
{{{{
	{let insane = 'Hello World'}
	console.log(insane);
}}}}*/

/*
{{{{
	let insane = 'Hello World';
	{let insane = 'Hello World'}
}}}}*/

/*
function f() {
	console.log('I am outside');
}
*/

/*
(function () {
	if (false){
		function f() {
			console.log('I am outside');
		}
	}
})
*/

/*
const PI = 3.1415;
console.log(PI);

PI = 3;
*/

/*
if (true) {
	const MAX = 5;
	console.log(MAX);
}
*/

/*
const a = [];
a.push('Hello');
a.length = 0;
a = ['whoami'];
console.log(a);*/

/*
const foo = Object.freeze({});

foo.prop = 123;*/



var getGlobal = function(){
    if (typeof self !== 'undefined') { console.log(self); }
    if (typeof window !== 'undefined') { console.log(window);}
    if (typeof global !== 'undefined') { console.log(global); }
    throw new Error('unable to locate global object');
}
getGlobal();