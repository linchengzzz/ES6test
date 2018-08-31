"use strict";

// const log = console.log.bind(console);
// log(1);
var ary = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];
console.log(Math.max.apply(Math, ary));
console.log(Math.max.apply(Math, ary));
console.log(Reflect.apply(Math.max, Math, ary));