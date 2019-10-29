/*
let s1 = Symbol('foo');
let s2 = Symbol('bar');

console.log(s1.toString());
console.log(s2.toString());*/

/*
const obj = {
    toString(){
        return 'abc';
    }
};
const sym = Symbol(obj);
console.log(sym);*/

/*
let sym = Symbol('My symbol');

console.log(String(sym));
console.log(sym.toString());
*/

/*
const sym = Symbol('foo');
sym.description;
*/

/*
const mySymbol = Symbol();
const a = {};
a.mySymbol = 'HELLO!!!';
console.log(a['mySymbol']);
*/

/*
let s = Symbol();

let obj = {
    [s]: function (arg) {
        return arg;
    }
};

console.log(obj[s](123));
*/

/*
const log = {};

log.levels = {
    DEBUG: Symbol('debug'),
    INFO:Symbol('info'),
    WARN: Symbol('warn')
};

console.log(log.levels.DEBUG,'debug message');
console.log(log.levels.INFO,'info message');*/

/*
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols);
*/

/*
const obj = {};

let foo = Symbol("foo");

Object.defineProperty(obj,foo,{
   value: "foobar",
});

for (let i in obj) {
    console.log(i);
}

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
*/

let obj = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
};

console.log(Reflect.ownKeys(obj));