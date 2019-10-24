/*function log(x, y='world'){
    console.log(x,y);
}

log('Hello','China');*/

/*
function foo({x=1, y=5}){
    console.log(x, y);
}

foo({});
foo({x:1,y:67});
foo({});
*/
/*function fetch(url,{body='', method='GET', header={}} = {}){
    console.log(url,method);
}
fetch('http://www.baidu.com');*/
/*

function m1({x=0,y=0}={}){
    return [x,y];
}

function m2({x,y} = {x:0, y:0}) {
    return [x,y];
}

console.log(m1());
console.log(m2());

console.log(m1({x: 3, y: 8}));
console.log(m2({x: 3, y: 8}));

console.log(m1({x: 3}));
console.log(m2({x: 3}));

console.log(m1({}));
console.log(m2({}));

console.log(m1({z: 3}));
console.log(m2({z: 3}));*/

/*
function f(x=1,y) {
    return [x,y];
}

console.log(f());
console.log(f(2));
console.log(f(undefined, 1));*/

/*
function f(x, y = 5, z) {
    return [x, y, z];
}

console.log(f());
console.log(f(1));
// f(1, ,2);
console.log(f(1, undefined, 3));
*/

/*
function f(x,y=5) {
    return [x,y];
}

console.log(f(5,undefined));
*/

/*var x = 1;

function f(x,y=x) {
    console.log(y);
}
f(123);*/

/*
let x = 1;
function f(y = x) {
    let x = 2;
    console.log(y);
}
f();
*/

/*
let foo = 'outer';

function bar(func = () => foo) {
    let foo = 'inner';
    console.log(func());
}
bar()*/

/*
function throwIfMissing() {
    throw new Error('Missing parameter');
}
function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}
foo(123);
*/
/*
function add(...values) {
    let sum = 0;

    for (var val of values){
        sum += val;
    }

    return sum;
}

console.log(add(100, 200, 300));
*/
/*
function fuckyou() {
    console.log(fuckyou.name);
}
fuckyou();*/

/*
var f = function () {}

console.log(f.name);*/

/*const bar = function baz() {

}
console.log(bar.name);
console.log(bar.name);*/
// console.log((new Function).name);

/*
function foo() {}

console.log(foo.bind({}).name);
console.log((function () {
}).bind({}).name);;*/

// var f = v => v;
// console.log(f(123123));

/*
var f = v => v;
console.log(f("fuckyou!!!"));*/

/*
var f = () => 5;
console.log(f());*/

/*
var sum = (num1,num2) => num1 + num2;
console.log(sum(1, 2));;*/


/*
var test = fuckyou => fuckyou;
console.log(test("fuck11111you"));;*/

/*
var sum = (num1, num2) => {return num1 + num2;}
console.log(sum(1,33333));*/

/*
let getTempItem = id => ({id:id, name:"Temp"});
console.log(getTempItem(100));;*/

/*
let foo = () => ({a:1});
console.log(foo());;*/
/*
let test = {
    first: "1",
    last: "3"
}
console.log(test);
const full = ({first,last}) => first + ' ' + last;
console.log(full(test));*/

/*
const isEven = n => n % 2 ===0;
console.log(isEven(4));
*/

/*
const isEven = function (n) {
    return n % 2 ===0;
}
console.log(isEven(46));*/

/*
const test = [1,3,4].map(function (x) {
    return x * x;
})
console.log(test);

const test1 = [1,3,4].map(x => x**x);
console.log(test1);*/

// var result = values.sort((a,b) => a - b);

/*
const numbers = (...nums) => nums;
console.log(numbers(1, 2, 3, 4, 5, 6));*/

/*
const headAndTail = (head, ...tail) => [head, tail];
console.log(headAndTail(1, 2, 23, 4, 5, 6, 7));*/

/*
function Timer(){
    this.s1 = 0;
    this.s2 = 0;
    setInterval(() => this.s1++, 1000);
    setInterval(function(){
        this.s2++;
    },1000);
}

var timer = new Timer();
setTimeout(() => console.log('s1 ', timer.s1),3100);
setTimeout(() => console.log('s2 ', timer.s2),3100);
*/
/*

function foo() {
    setTimeout(()=>{
        console.log('args:',arguments);
    },100);
}

foo(2, 4, 6, 8);*/
/*

setTimeout(()=>{
    console.log('args:',arguments);
},100);*/

/*

const cat = {
    lives: 9,
    jumps:function() {
        return this.lives--;
    }
}
console.log(cat.jumps());*/

/*
var fix = f => (x => f(v => x(x)(v)))
(x => f(v => x(x)(v)));
console.log(fix);*/

/*
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
*/
/*
function factorial(n,total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}

console.log(factorial(5, 1));*/

/*
function Fibonacci(n) {
    if (n <= 1){return 1};
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
console.log(Fibonacci(5));*/

/*
function Fibonacci2(n, ac1 = 1, ac2 = 2) {
    if ( n <=1 ){return ac2};
    return Fibonacci2 (n-1,ac2,ac1+ac2);
}

console.log(Fibonacci2(1000));*/
/*
function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1,n * total);
}

function factorial(n) {
    return tailFactorial(n,1);
}

console.log(factorial(5));*/
/*

function currying(fn, n) {
    return function (m) {
        return fn.call(this, m,n);
    }
}

function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
}
const factorial = currying(tailFactorial,1);
console.log(factorial(5));*/

/*
function factorial(n, total = 1){
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}

console.log(factorial(5));*/

/*
function sum(x, y) {
    if (y > 0){
        return sum(x + 1, y - 1);
    }else{
        return x;
    }
}

console.log(sum(1000, 5));
*/
/*

function trampoline(f) {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}
function sum(x, y) {
    if (y > 0){
        return sum.bind(null, x + 1, y - 1);
    }else{
        return x;
    }
}

console.log(trampoline(sum(1,10000000)));*/

/*function tco(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    };
}

var sum = tco(function(x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1)
    }
    else {
        return x
    }
});

sum(1, 100000)*/
// 100001

function test (){
    console.log("fuckyou!!");
}
console.log(test.toString());