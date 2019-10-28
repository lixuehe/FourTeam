/*
console.log(...[1,2,3]);

console.log(1,...[2,3,4],5);*/

/*
function push(array, ...items) {
    array.push(...items);
    return array;
}

function add(x, y) {
    return x + y;
}

// console.log(push( [2, 3, 4]));

const numbers = [4,38,342,"weerwer","whoami"];

// console.log(add(...numbers));;
console.log(push([],...numbers));
*/

/*
function f(v, w, x, y, z) {
    return v,w,x,y,z;
}
const args = [0, 1];
console.log(f(-1, ...args, 2, ...[3]));
*/
/*
function f(x, y, z) {
    console.log(x,y,z);
}
let args = [0, 1, 2];
f(...args);*/

/*console.log(Math.max(...[14, 3, 77]));
console.log(Math.max(14, 3, 77));*/

/*
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log(arr1);*/

// console.log(new Date(...[2015,1,1]));

/*
const a1 = [1,2];
const a2 = a1;
a2[0] = 2;
console.log(a1);*/

/*
const a1 = [1, 2];
const a2 = a1.concat();
a2[0] = 2;
console.log("a1"+a1);
console.log("a2"+a2);
*/

/*
const a1 = [1, 2];
const a2 = [...a1];
console.log(a1);
console.log(a2);
*/

/*
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
console.log([...arr1,...arr2,...arr3]);
*/

/*
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(rest);
*/

/*
const [first, ...rest] = ["foo"];
console.log(first);
console.log(rest);
*/
// console.log([...'hello']);

/*
console.log('x\uD83D\uDE80y'.length);
console.log([...'x\uD83D\uDE80y'].length);
*/

/*
function length(str) {
    return [...str].length;
}

console.log(length('x\uD83D\uDE80y'));
*/

/*
let str = 'x\uD83D\uDE80y';

str.split('').reverse().join('');

console.log([...str].reverse().join(''));
*/
/*
let map = new Map([
   [1, 'one'],
   [2, 'two'],
   [3, 'three'],
]);

let arr = [...map.keys()];
let arr2 = [...map.values()];
console.log(arr);
console.log(arr2);
*/

/*
const go = function*(){
    yield 1;
    yield 2;
    yield 3;
};

console.log([...go()]);
*/

/*
let arraylike = {
    '0':'a',
    '1':'b',
    '2':'c',
    length: 3
};

let arr2 = Array.from(arraylike);
console.log(arr2);
*/

/*
let namesSet = new Set(['a','b'])
console.log(namesSet);
console.log(Array.from(namesSet));
*/

/*
let arraylike = {
    '0':'a',
    '1':'b',
    '2':'c',
    length: 3
};

console.log(Array.from([1, 2, 3], (x) => x * x));
*/

// console.log(Array.from([1, , 2, , 3], (n) => n || undefined));

/*
function typeOf() {
    return Array.from(arguments, value => typeof value);
}

console.log(typeOf(null, [], NaN));
*/
/*
function countSymbols(string){
    return Array.from(string).length;
}

console.log(countSymbols("Lfukcyou"));
*/
/*
console.log(Array.of(3, 11, 8));
console.log(Array.of(3).length);*/

// console.log(Array(3,11,8));

// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));

// console.log([1, 4, -5, 10].find((n) => n < 0));

/*
console.log([1, 5, 10, 15].findIndex(function (value, index, arr) {
    return value > 9;
}));*/

/*
function f(v) {
    return v > this.age
}

let person = {name:'John',age:20};
console.log([10, 12, 26, 15].find(f, person));*/

// console.log(['a', 'b', 'c'].fill(15,1,2));

/*
let arr = new Array(3).fill({name:"Mike"});
arr[0].name = "BEN";
console.log(arr);
*/

/*
let arr = new Array(3).fill([]);
arr[0].push(5);
console.log(arr);*/

/*
for (let index of ['a','b'].keys()){
    console.log(index);
}*/
/*
for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}*/

/*
let letter = ['a','b','c'];
let entries = letter.entries();
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);*/

// console.log([1, 2, NaN].includes(NaN));
/*
console.log([1, 2, 3].includes(3, -1));*/

/*
console.log([NaN].indexOf(NaN));
console.log([NaN].includes(NaN));
*/

// console.log([1, 2, [3, 4]].flat());

// console.log([2, 3, 4].flatMap((x) => [x, x * 2]));

/*
console.log(Array(3));
console.log(0 in [undefined, undefined, undefined]);
console.log(0 in [, , ,]);*/

/*
console.log(Array.from(['a', , 'b']));
console.log([...['a', , 'b']]);*/

// console.log([, 'a', 'b', ,].copyWithin(2, 0));

// console.log(new Array(3).fill('a'));

/*
let arr = [, ,];
for (let i of arr){
    console.log(1);
}*/

/*
const arr = [
    'peach',
    'straw',
    'apple',
    'spork'
];

const stableSorting = (s1, s2) => {
    if (s1[0] < s2[0]) return -1;
    return 1;
};

const unstableSorting = (s1, s2) => {
    if (s1[0] <= s2[0]) return -1;
    return 1;
};

console.log(arr.sort(stableSorting));
console.log(arr.sort(unstableSorting));
*/

/*
const foo = 'bar';
const baz = {foo};
console.log(baz);*/
