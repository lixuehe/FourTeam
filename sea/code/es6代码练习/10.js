/*
const s = new Set();

[2,3,4,5,6,7,8,9,2,3,4,5,6].forEach(
    function(x){
        s.add(x);
    }
);

for (let i of s){
    console.log(i);
}*/
/*

const set = new Set([1,2,3,4,5,6,4,4]);
console.log([...set]);*/

/*
let s = new Set();
s.add(1).add(2).add(2)
s.delete(2);
console.log(s.has(2));
*/

/*
const map = new Map([
    ['name','张三'],
    ['title','Author']
]);
// console.log(map.size);
// console.log(map.has('name'));
// console.log(map.get('title'));*/

/*
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(1000).then((value) => {
    console.log(value);
});*/

/*
let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function() {
    console.log('resolved.');
});

console.log('Hi!');
*/

/*
new Promise((resolve, reject) => {
    resolve(1);
    console.log(2);
}).then(r => {
    console.log(r);
});*/

/*
const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing().then(function() {
    console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123

*/
/*
const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing()
    .catch(function(error) {
        console.log('oh no', error);
    })
    .then(function() {
        console.log('carry on');
    });
// oh no [ReferenceError: x is not defined]
// carry on*/


/*
const p1 = new Promise((resolve, reject) => {
    resolve('hello');
})
    .then(result => result);

const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了');
})
    .then(result => result);

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(e => console.log(e));*/

