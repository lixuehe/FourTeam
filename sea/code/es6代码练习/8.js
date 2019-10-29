/*
console.log(Object.is(+0,-0));
console.log(Object.is(NaN, NaN));
*/

/*
const target = {a:1};
const source1 = {b:2};
const source2 = {c:3};

Object.assign(target,source1,source2);
console.log(target);*/

/*
const obj = {a:1};
console.log(Object.assign(obj) === obj);*/

// console.log(typeof Object.assign(2));

// console.log(Object.assign(null));

/*
let obj = {a:1};
console.log(Object.assign(obj, undefined) === obj);
console.log(Object.assign(obj, null) === obj);
*/

/*
const v1 = 'abc'
const v2 = true;
const v3 = 10;

const obj = Object.assign({},v1,v2,v3)
console.log(obj);
*/

/*
const obj1 = {a:{b:1}};
const obj2 = Object.assign({},obj1);
obj1.a.b = 2;
console.log(obj2.a.b);*/

/*
const target = { a:{ b:'c', d:'e' } }
const source = { a:{ b:'hello'} }
console.log(Object.assign(target, source));
*/

// console.log(Object.assign([1, 2, 3], [4, 5, 7]));

/*
const source = {
    get foo() {return 1}
};
const target = {};

console.log(Object.assign(target, source));*/


/*
const DEFAULTS = {
    logLeve: 0,
    outputFormat: 'html'
};

function processContent(options) {
    options = Object.assign({},DEFAULTS,options);
    console.log(options);
}
processContent()
*/

/*
const DEFAULTS = {
    url:{
        host:'www.baidu.com',
        port: 8080
    },
};

function processContent(options) {
    options = Object.assign({},DEFAULTS,options);
    console.log(options);
}

processContent({url:{port:9000}})
*/
/*
const obj = {
    foo: 123,
    get bar() {return 'abc'}
};

console.log(Object.getOwnPropertyDescriptors(obj));
*/

/*
const source = {
    set foo(value) {
        console.log(value);
    }
};

const target1 = {};
Object.assign(target1,source)

console.log(Object.getOwnPropertyDescriptor(target1, 'foo'));*/

/*
const source = {
    set foo(value) {
        console.log(value);
    }
};

const target2 = {};
Object.defineProperties(target2,Object.getOwnPropertyDescriptors(source));
Object.getOwnPropertyDescriptor(target2,'foo')*/

/*
const obj = {
    method: function () {
        return "1";
    }
};
console.log(obj.__proto__);
*/
/*
const o = Object.setPrototypeOf({},null);
console.log(o);*/

/*
let proto = {};
let obj = {x: 10};
Object.setPrototypeOf(obj,proto);

proto.y = 20;
proto.z = 40;

console.log(obj.x);
console.log(obj.y);
console.log(obj.z);*/


/*
function Rectangle() {
    return "fuckyou!!"
}

const rec = new Rectangle();

console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);

/!*
Object.setPrototypeOf(rec,Object.prototype);
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);*!/
*/

/*
var obj = {foo:'bar',baz:42};
console.log(Object.keys(obj));
console.log(Object.values(obj));*/

/*
let {keys, values, entries} = Object;
let obj = {a:1,b:2,c:3};

/!*
for (let key of keys(obj)){
    console.log(key);
}
for (let value of values(obj)){
    console.log(value);
}*!/

for (let [key, value] of entries(obj)){
    console.log([key, value]);
}*/


/*
const obj = { foo:'bar', baz:42 };
console.log(Object.values(obj));*/
/*

const obj = {100:'a',2:'b',7:'c',1:'d'};
console.log(Object.values(obj));*/

/*
const obj = Object.create({},{p:
    {
        value:42,
        enumerable:true
    }
});
console.log(Object.values(obj));*/

// console.log(Object.values('hello'));
/*
const obj = {foo:'bar',baz:423};
console.log(Object.entries(obj));*/
// console.log(Object.entries({[Symbol()]: 123, foo: 'babbbb'}));

/*
let obj = {one:1,two:2};

for (let [k,v] of Object.entries(obj)){
    console.log(`${JSON.stringify(k)}: ${JSON.stringify(v)}`);
}*/

/*
const obj = {foo:'bar',baz:42};
const map = new Map(Object.entries(obj));
console.log(map);*/

/*
let s = Symbol();

console.log(typeof s);*/
