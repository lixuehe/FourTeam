/*
let a = 1;
let b = 2;
let c = 3;

console.log(a,b,c);
*/

/*
let [a, b, c] = [1,2,3];

console.log(a);

let [foo, [[bar], baz]] = [1, [[2],3]]
console.log(foo,bar,baz);

let [ , , third] = ["foo", "bar", "baz"];
console.log(third);

let [x,y, ] = [1, 2, 3];
console.log(x,y);
*/

/*
let [head, ...tail] = [1,2,3,4];
console.log(head,tail);

let [x, y, ...z] = ['a'];
console.log(z);*/

/*
let [foo] = [];
console.log(foo);
let [bar, foo1] = [1];
console.log(bar);
*/

/*let [x, y] = [1,2,3];
console.log(x,y);
let [a, [b,c], d] = [1, [2,3], 4];
console.log(a,b,c,d);*/

/*
let [foo] = {};
console.log(foo);*/

/*
let [x,y,z] = new Set(['a','b','c'])
console.log(x,y,z);*/
/*

function* fibs(){
    let a = 0;
    let b = 1;
    while(true){
        yield a;
        [a,b] = [b, a+b];
    }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);

let [foo = true] = [];
console.log(foo);

let [x,y = 'b'] = ['a'];
console.log(x,y);*/

/*
let [x,y = 'b'] = ['a', 'c'];
console.log(x,y);*/

/*
let [x = 1] = [undefined];
console.log(x);
*/

/*
let [x = 1] = [null];
console.log(x);*/

/*
function f(){
    console.log('aaa');
}

let [x = f()] = [1];
console.log(x);
*/

/*
let [x = 1, y = x] = [2,3];
console.log(x,y);*/
/*

let [x = y, y = 1] = [];
console.log(y);*/

/*
let { foo, bar } = {bar: 'bbb',foo: 'aaa'};
console.log(foo,bar);
*/

/*
let {baz} = {foo:'aaa', bar:'bbb', baz:'ccc'};
console.log(baz);
*/

/*
{
let {log, sin, cos} = Math;
console.log(log,sin,cos);
}
const {log} = console;
    log('whoami');*/
/*

let {foo: baz} = {foo:'aaa',bar:'bbb'};
console.log(baz);*/

/*
let obj = {first: 'hello', last: 'world'};
let { first: f, last: l} = obj;
console.log(obj);*/

/*
let {foo: baz} = {foo: 'aaa', bar: 'bbb'};
console.log(baz);*/

/*
let obj = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
// console.log(obj.p[0]+obj.p[1].y)
let {p,p: [x, { y }]} = obj;
console.log(x,y,p);*/

/*
const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

let {loc, loc: {start }, loc:{ start: { line }} } = node;
console.log(loc,start,line);
*/

/*let obj = {};
let arr = [];

({foo: obj.prop, bar: arr[0]} = { foo: 123, bar: true });
console.log(obj);
console.log(arr);*/

/*
let {foo: {baz}} = {baz: {'baz'}};
console.log(baz);
*/

/*
const obj1 = {};
const obj2 = {foo: 'bar'};
Object.setPrototypeOf(obj1, obj2);

const { foo } = obj1;
console.log(foo);
*/

/*
var {x = 3} = {};
console.log(x);
*/

/*
var {x,y = 5} = {x: 1};
console.log(x,y);


var {x:y = 3} = {};
console.log(y);
 */

/*
var {x: y =3} = {x:5};
console.log(y);*/

/*
var {x =3} = {x: undefined};
console.log(x);
*/

/*let x;
({x} = {x:150});
console.log(x);*/

/*
let arr = [1, 2, 3];
let {0:first, [arr.length - 1]: last} =arr;
console.log(first,last);
*/

/*
const [a, b, c, d, e] = 'hello';
console.log(a,b,c,d,e);
*/

/*
let {length: len} = 'hello';
console.log(len);
*/

/*
let {toString: s} = 123;
console.log(s===Number.prototype.toString);
*/

/*
let {toString: s} = true;
console.log(s===Boolean.prototype.toString);
*/
/*

let { prop: x } = undefined;
let { prop: y } = null;
console.log(x,y);*/

/*
function add([x, y]){
    return x + y;
}
console.log(add([1,2]));
*/

/*
console.log([[1,2], [3, 4]].map(([a, b]) => a + b));*/

/*
function move({x=0, y=0} = {}){
    console.log([x,y]);
}

move({x: 3, y: 8});
move({x: 3});
move({});
move();*/

/*
function move({x, y} = {x: 0, y:0}) {
    console.log([x, y]);
}
move({x:3, y:8});
move({x:3});
move({});
move();
*/
/*

console.log([1, undefined, 3].map((x = 'yes') => x));

[(a)] = [5];
console.log([(a)]);

({ p: (d)} = {});

[(parseInt.porp)] = [3];
*/

/*
let x = 1;
let y = 2;

[x, y] = [y, x];
console.log(x,y);*/

/*
function example(){
    return [1,2,3];
}

let [a, b, c] = example();
console.log(a,b,c);

function example1(){
    return {
        foo: 1,
        bar: 2
    };
}
let {foo, bar} = example1();

console.log(foo,bar);*/

/*
function f(x, y, z){
    console.log(x, y, z);
}
f([1, 2, 3]);
*/

/*
function f({x, y, z}){
    console.log(x,y,z);
}
f({x:2,z:5,y:60});
*/

/*
let jsonData = {
    id: 42,
    status: "ok",
    data: [765, 5039]
};

let { id, status, data: number } = jsonData;
console.log(id,status,number);
*/
/*
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [,value] of map){
    // console.log(key + " is " + value);
    console.log(value);
}*/

/*
console.log("\u{20BB7}");
console.log("\u{41}\u{42}\u{43}");

let hello = 123;
console.log("hell\u{6F}");
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
for (let codePoint of 'hello world'){
    console.log(codePoint);
}*/

/*
let text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++){
    console.log(text[i]);
}

for(let i of text){
    console.log(i);
}*/

/*
console.log('中' === '\u4e2d');

const json = '"\u2028"';
console.log(JSON.parse(json));
*/

/*
const PS = eval("'\u2029'");
console.log(PS);
*/

/*
console.log(JSON.stringify('\u{D834}'));

console.log(JSON.stringify('\uDF06\uD834'));

console.log(`In JavaScript '\n' is a line-feed.`);

console.log(`In JavaScript this is
not legal.`);
*/

/*
console.log(`string text line 1
string text line 2`);*/

/*
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

let greeting = `\`Yo\` World!`;
console.log(greeting);*/

/*
function authorize(user, action) {
    if (!user.hasPrivilege(action)) {
        throw new Error(
            // 传统写法为
            // 'User '
            // + user.name
            // + ' is not authorized to do '
            // + action
            // + '.'
            `User ${user.name} is not authorized to do ${action}.`);
    }
}
console.log(authorize({},{}));
*/

/*
let x = 1;
let y = 2;

console.log(`${x} + ${y} = ${x+y}`);

console.log(`${x} + ${y * 2} = ${x + y * 2}`);

let obj = {x: 1, y:2};
console.log(`${obj.x + obj.y}`);
*/

/*
function fn(){
    return "Hello World";
}
let a = "abc";

console.log(`foo ${fn()} ${a}`);
*/

/*
let place = "world";
let msg = `Hello, ${'World'}`;
console.log(msg);*/
/*
let place = "world";
let msg = `Hello, ${'World'}`;
console.log(msg);*/

/*
const tmpl = addr => `
  <table>
  ${addr.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
]
console.log(tmpl(data));
*/

/*
let func = (name) => `Hello ${name}!`;
console.log(func('fuck'));
*/

/*let template = `
    <ul>
        <% for(let i=0; i<data.supplies.length; i++){ %>
            <li><%= data.supplies[i] %></li>
        <% } %>
    </ul>
`;

function compile(template){
    const evalExpr = /<%=(.+?)%>/g;
    const expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    let script =
        `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

    return script;
}

let parse = eval(compile(template));
div.innerHTML = parse({supplies: ["broom", "mop", "cleaner"]});
*/

/*
let a = 5;
let b = 10;

tag `Hello ${ a + b } world ${ a * b }`;*/

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

tag`Hello ${a + b}world ${a * b}`;
*/

let total = 30;
let msg = `The total is ${total} (${total*1.05} with tax)`;

/*function passthru(literals){
    let result = '';
    let i = 0;

    while(i < literals.length){
        result += literals[i++];
        if(i< arguments.length){
            result += arguments[i];
        }
    }
    return result;
}*/

function passthru(literals, ...values){
    let output ="";
    let index;
    for (index = 0; index < value.length; index++){
        output += literals[index] + values[index];
    }
    output += literals[index]
    return output;
}

console.log(msg);