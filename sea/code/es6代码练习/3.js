/*
var a = [];
for (let i=0; i<10; i++){
    a[i] = function(){
        console.log(i);
    };
}
a[6]();*/

/*
for (let i=0; i<3; i++){
    let i = 'abc';
    console.log(i);
}

console.log(foo);
var foo = 2;

console.log(bar);
let bar = 2;
*/

/*var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

f();*/

/*
var s = 'hello';

for (var i=0; i< s.length; i++){
    console.log(s[i]);
}
console.log(i);*/

/*
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
        console.log(n);
    }
    console.log(n); // 5
}

f1();*/

/*
function f(){
    console.log('I am out side!');
}

(function(){
    if(false){
        function f() { console.log('I am inside!'); }
    }
    f();
}());*/

// if (true) console.log("whoami");

/*
console.log(a);
var a = 100;*/

/*
let a = 1;

console.log(global.a);*/

/*
let [foo, [[bar],baz]] =  [1,[[2],3]];
console.log(foo,bar,baz);

let [ abc , third] = ["foo", "bar", "baz"];
console.log(abc,third);
*/

/*
let [head, ...tail] = [1,2,3,4];
console.log(tail);*/
/*

let [x, y, ...z] = ['a'];
console.log(z);*/

/*
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x,y,z);
*/

/*
let [foo = true] = [];
console.log(foo);*/

/*
let [x, y = 'b'] = ['a',undefined];
console.log(x,y);*/

/*
let [x = 1] = [undefined];
console.log(x);

let [y = 1] = [null];
console.log(y);*/

/*
function f(){
    console.log('aaa');
}

let [x = f()] = [1];
console.log(x);*/
/*

let { baz} = {foo:'aaa', bar:'bbb'};
console.log(baz);*/
/*

let {log} = console;
log('hello11111111111');

let {foo:baz} = {foo:'aaa',bar:'bbb'};
console.log(baz);*/

/*
let obj = {first: 'hello', last:'world'};
let {first: f, last: l} = obj;
console.log(f,l)
*/

/*
let {foo:foo, bar:bar} = {foo: 'aaa', bar:'bbb'};
console.log(foo,bar);*/

/*
let {foo:baz} = {foo:'aaa',bar:'bbb'};
console.log(baz);
console.log(foo);
*/

/*
let obj = {
    p:[
        'Hello',
        {y:'world'}
    ]
};
// console.log(obj.p[0]+" "+obj.p[1].y);

let {p:[x,{y}]} = obj;
console.log(x,y);
*/

/*
const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
// let {loc, loc:{start}, loc:{start:{line}} } = node;
let {loc, loc:{start}, loc:{start:{line}}, loc:{start:{column}}} = node;

console.log(loc,start,line,column);
*/

/*
let obj = {};
let arr = [];

({foo:obj.prop,bar:arr[0] } = {foo:123,bar:true});
console.log(obj,arr[0]);*/

/*
var {x: y = 3} = {x: 5};
console.log(y);
*/

/*
var {message:msg  = 'Something went wrong'} = {};
console.log(msg);

var {x = 3} = {x:undefined};
console.log(x);

var {x = 3} = {x:null};
console.log(x);
*/

/*
let x;
({x} = {x: 1});
console.log(x);
*/

/*
let arr = [1,2,3];
let {0:first, [arr.length - 1]: last} = arr;
console.log(first,last);
*/
/*
const [a,b,c,d,e] = 'hello';
console.log(a,b,c,d,e);*/

/*
let {length: len} = 'hello';
console.log(len);*/

/*
function add([x,y]){
    return x + y;
}

console.log(add([1,2]));*/

/*
function move({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move());
*/

/*
function move({x,y} = {x:0, y:0}){
    return [x, y];
}
console.log(move());*/

/*
function example(){
    return [1,2,3];
}
let [a, b, c] = example();
console.log(a,b,c);
*/

/*
function example(){
    return {
        foo: 1,
        bar: 2
    };
}
let {foo, bar} = example();
console.log(foo,bar);
*/

/*
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

let { id, status, data: number } = jsonData;
console.log(id,status,number);
*/

/*
const map = new Map();
map.set('first','hello');
map.set('second','world');

for (let [key,value] of map) {
    console.log(key + " is " + value);
}
*/

/*
console.log("\uD842\uDFB7");
*/
// console.log("\u20BB7")

// console.log("\u{41}\u{42}\u{43}");

// console.log("\u{20BB7}")
/*
let hello = 123;
console.log("hell\u{6f}")
*/
// console.log('\u{1F680}' === '\uD83D\uDE80');

/*
console.log('\z' === 'z');
console.log('\172' === 'z');
console.log('\x7A' === 'z');
console.log('\u007A' === 'z');
console.log('\u{7A}' === 'z');
*/

/*
for (let code of 'foo'){
    console.log(code);
}*/

/*
let text = String.fromCodePoint(0x20BB7);


for (let i=0; i<text.length; i++) {
    console.log(text[i]);
}

for (let i of text) {
    console.log(i);
}*/

// console.log('中'=== '\u4e2d');

/*
const json = '"\u2028"';
console.log(JSON.parse(json));
*/
/*
const PS = eval("'\u2029'");
console.log(PS);*/

// console.log("\uD834\uDF06");
/*
console.log(JSON.stringify('\u{DF06}\u{D834}'));
*/

// console.log(`In JavaScript '\n' is a line-feed.`);

/*
console.log(`In JavaScript this is
not legal.`);*/
/*
console.log(`string text line 1
string text line 2`);*/

/*
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}`);*/

/*
let greeting = `\`Yo\` World!`;
console.log(greeting);
*/

/*
let x = 1;
let y = 2;

console.log(`${x} + ${y} = ${x + y}`);
console.log(`${x} + ${y * 2} = ${x + y * 2}`);

let obj = {x:1, y:2};
console.log(`${obj.x + obj.y}`);
*/
/*
function fn(){
    return "Hello World";
}
console.log(`foo ${fn()} bar`);*/

/*
let msg = `Hello, ${'place'}`;
console.log(msg);
*/
/*
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];
const tmp1 = addrs => `
    <table>
    ${addrs.map(addr => `
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
    `).join('')}
    </table>
`;
console.log(tmp1(data));
*/
/*
let func = (name) => `Hello ${name}!`;
console.log(func('Jack'));*/

// console.log `whoami`;

/*
let a = 5;
let b = 10;

console.log `Hello ${a + b} world ${a * b}`;
*/

/*
let a = 5;
let b = 10;

function tag(s, v1, v2){
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);

    return "OK";
}

tag `Hello ${a + b} world ${a * b}`;
*/

/*
let total = 30;
let msg = passthru `The total is ${total} (${total * 1.05} with tax)`;

function passthru(literals){
    let result = '';
    let i = 0;

    while(i < literals.length){
        result += literals[i++];
        if (i < arguments.length){
            result += arguments[i];
        }
    }
    return result;
}

console.log(msg);*/

/*
function SaferHTML(templateData){
    let s = templateData[0];
    for (let i =1; i < arguments.length; i++){
        let arg = String(arguments[i]);
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        s += templateData[i];
    }
    return s;
}

let sender = '<script>alert("abc")</script>';
let message = SaferHTML `<p>${sender} has send you a message.</p>`

console.log(message);
*/

// i18n`Welcome to ${siteName}, you are visitor number ${visitorNumber}!`;

// console.log `123`;

/*
tag `First line\nSecond line`;

function tag(strings){
    console.log(strings.raw[0]);
}*/

/*
function tag(strs) {
    console.log(strs[0]);
    console.log(strs.raw[0]);
}

tag`\unicode and \u{55}`;*/

// console.log(String.fromCharCode(0x20BB7));

// console.log(String.fromCodePoint(0x20BB7));

// console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y');

/*
console.log(String.raw `Hi\n${2+3}!`);
console.log(String.raw`Hi\\n`);*/

// console.log(String.raw({raw:['foo', 'bar']}, 1+2));

/*
let s = '𠮷a';
for (let ch of s){
    console.log(ch.codePointAt(0).toString(16));
}*/

/*
let arr = [...'𠮷a'];
arr.forEach(
    ch => console.log(ch.codePointAt(0).toString(16))
);*/

/*
function is32Bit(c){
    return c.codePointAt(0) > 0xFFFF;
}
console.log(is32Bit("𠮷"));*/

// console.log("\u004F\u030C");

/*
console.log('\u01D1'.normalize());
console.log('\u01D1'.normalize() === '\u004F\u030c'.normalize());*/

// console.log('\u004F\u030C'.normalize('NFKD').length);