"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }

// Point.prototype.toString = function() {
//     return '(' + this.x + ', ' + this.y + ')';
// };

// var p = new Point(1, 2);
// console.log(p.toString());
// const Point = class {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
// const point = new Point(1,2);
// console.log(point);

// class Foo {
//     constructor(...args) {
//         this.args = args;
//     }
//     *[Symbol.iterator]() {
//         for (let arg of this.args) {
//             yield arg;
//         }
//     }
// }

// for (let x of new Foo('hello', 'world')) {
//     console.log(x);
// }
var Point = function Point() {
    _classCallCheck(this, Point);

    this.x = 10;
};

console.log(new Point());
console.log(new Point().x);