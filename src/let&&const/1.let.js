/* 1.let命令 */

/* -------- 基本用法 -------- */

{
    let a = 10;
    var b = 1;
}
console.log(a); // Error
console.log(b);

for (let i = 0; i < 10; i++) {}
console.log(i); // Error

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6](); // 10

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6](); // 6

for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
// abc
// abc
// abc

/* -------- 不存在变量提升 -------- */

console.log(foo); // undefined
var foo = 2;

console.log(bar); // Error
let bar = 10;

/* -------- 暂时性死区 -------- */

var tmp = 123;

if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
}

if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}

function bar(x = y, y = 2) {
    return [x, y];
}
bar(); // 报错

/* -------- 不允许重复声明 -------- */

// 报错
function func() {
    let a = 10;
    // var a = 1;
}

// 报错
function func() {
    let a = 10;
    // let a = 1;
}
