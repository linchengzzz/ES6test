'use strict';

/* 1.let命令 */

/* -------- 基本用法 -------- */

{
    var _a = 10;
    var b = 1;
}
console.log(a); // Error
console.log(b);

for (var _i = 0; _i < 10; _i++) {}
console.log(i); // Error

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10

var a = [];

var _loop = function _loop(_i2) {
    a[_i2] = function () {
        console.log(_i2);
    };
};

for (var _i2 = 0; _i2 < 10; _i2++) {
    _loop(_i2);
}
a[6](); // 6

for (var _i3 = 0; _i3 < 3; _i3++) {
    var _i4 = 'abc';
    console.log(_i4);
}
// abc
// abc
// abc

/* -------- 不存在变量提升 -------- */

console.log(foo); // undefined
var foo = 2;

console.log(bar); // Error
var bar = 10;

/* -------- 暂时性死区 -------- */

var tmp = 123;

if (true) {
    _tmp = 'abc'; // ReferenceError
    var _tmp = void 0;
}

if (true) {
    // TDZ开始
    _tmp2 = 'abc'; // ReferenceError
    console.log(_tmp2); // ReferenceError

    var _tmp2 = void 0; // TDZ结束
    console.log(_tmp2); // undefined

    _tmp2 = 123;
    console.log(_tmp2); // 123
}

function bar() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : y;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return [x, y];
}
bar(); // 报错

/* -------- 不允许重复声明 -------- */

// 报错
function func() {
    var a = 10;
    // var a = 1;
}

// 报错
function func() {
    var a = 10;
    // let a = 1;
}