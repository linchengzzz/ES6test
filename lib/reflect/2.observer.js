'use strict';

var queuedObservers = new Set();

var observe = function observe(fn) {
    return queuedObservers.add(fn);
};
var observable = function observable(obj) {
    return new Proxy(obj, { set: set });
};

function set(target, key, value, receiver) {
    var result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach(function (observer) {
        return observer();
    });
    return result;
}
var person = observable({
    name: '张三',
    age: 20
});

function print() {
    console.log(person.name + ', ' + person.age);
}

observe(print);
person.name = '李四';
// 输出
// 李四, 20