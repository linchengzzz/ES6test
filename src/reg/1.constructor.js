var regex = new RegExp('xyz', 'i');
// 等价于
var regex = /xyz/i;

var regex = new RegExp(/xyz/i);
// 等价于
var regex = /xyz/i;

console.log(new RegExp(/xzy/ig));

var s = '𠮷';

// /^.$/.test(s) // false
/^.$/u.test(s) // true
