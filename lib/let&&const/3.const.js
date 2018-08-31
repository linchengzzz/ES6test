/* 2.const */

/* -------- 基本用法 -------- */

// const PI = 3.1415;
// PI // 3.1415

// // PI = 3;
// console.log(Math.PI);

/* -------- 基本用法 -------- */

// const foo = {};

// 为 foo 添加一个属性，可以成功
// foo.prop = 123;
// foo.prop // 123

// 将 foo 指向另一个对象，就会报错
// foo = {}; // TypeError: "foo" is read-only

// const foo = Object.freeze({});
// const foo = {}

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
// foo.prop = 123;
// console.log(foo);
"use strict";