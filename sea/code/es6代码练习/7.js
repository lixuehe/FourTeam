/*
function f(x, y) {
    return {x, y};
}

console.log(f(1, 2));
console.log(f("fuckyou", 111));*/

/*
const o = {
    method(){
        return "hello!!!";
    }
}
console.log(o.method());*/

/*
const o = {
    method: function () {
        return "FUCKYOU!!";
    }
};
console.log(o.method());
*/
/*
let birth = '2000/01/01';

const Person = {
    name: '张三',
    birth,
    hello() {
        console.log('我的名字是',this.name);
    }
}
Person.hello();
*/
/*
function getPoint() {
    const x = 1;
    const y = 10;
    return {x, y};
}

console.log(getPoint());*/

/*
const cart = {
    _wheels: 4,
    get wheels () {
        return this._wheels;
    },

    set wheels (value) {
        if (value < this._wheels) {
            throw new Error('数值太小了');
        }
        this._wheels = value;
    }
}
*/
/*
let user = {
    name: 'test'
};

let foo = {
    bar: 'baz'
};
let test = {user,foo}
console.log(test.foo.bar);
*/

/*
var obj = {
    foo: true,
    abc: 123
};
console.log(obj);
*/

/*
let propKey = 'foo';

let obj = {
    [propKey]: false,
    ['a'+'bc']: 123
}
console.log(obj);*/

/*
let lastWord = 'last word';

const a = {
    'first word': 'hello',
    [lastWord]: 'word'
};

console.log(a['first word']);
console.log(a[lastWord]);
console.log(a['last word']);
*/
/*
let obj = {
    ['h'+'ello'](){
        return 'hi';
    }
};
console.log(obj.hello());*/

/*
const foo = 'bar';
const baz = { [foo]: 'abc' };
console.log(baz);
*/
/*
const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
    [keyA]: 'valueA',
    [keyB]: 'valueB'
};

console.log(myObject);
*/
/*
const person = {
    sayName() {
        console.log('hello!');
    },
};
console.log(person.sayName.name);
*/

/*
const obj = {
    get foo() {},
    set foo(x) {}
};

const descriptor = Object.getOwnPropertyDescriptor(obj,'foo');

console.log(descriptor.get);
console.log(descriptor.set.name);*/

// console.log((new Function()).name);

/*
var doSomething = function () {

};
console.log(doSomething.bind().name);*/

/*
const key1 = Symbol('fuckyou!!');
const key2 = Symbol();

let obj = {
    [key1]() {},
    [key2]() {},
};
console.log(obj[key1].name);
console.log(obj[key2].name);*/

/*
let obj = {foo: 123};
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
*/
// console.log(Reflect.ownKeys({[Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0}));

/*
const proto = {
    foo: 'hello'
};

const obj = {
    foo: 'world',
    find() {
        return super.foo
    }
};


Object.setPrototypeOf(obj,proto);
console.log(proto.foo);

console.log(obj.find());
*/

/*
const proto = {
    x: 'hello',
    foo(){
        console.log(this.x);
    },
};

const obj = {
    x: 'world',
    foo(){
        super.foo();
    }
}

Object.setPrototypeOf(obj,proto);

obj.foo();
*/
/*
let {x,y,...z} = {x:1,y:2,a:3,b:4};
console.log(x);
console.log(y);
console.log(z);
*/
/*
let obj = {a: {b:1}};
let {...x} = obj;
obj.a.b = 2;
console.log(x.a.b);
*/
/*
let o1 = {a:1};
let o2 = {b:2};
o2.__proto__ = o1;
let {...o3} = o2;
console.log(o3);
console.log(o3.a);
*/
/*
const o = Object.create({x:1,y:2});
o.z = 3;
console.log(o.z);

let {x, ...newObj} = o;
let {y, z} = newObj;
console.log(x);
console.log(y);
console.log(z);
*/

/*
let z = {a:3, b:4};
let n = {...z};
console.log(n);
*/

/*
let foo = {...['a','b','c']};
console.log(foo);*/

// console.log({...{}, a:1});
