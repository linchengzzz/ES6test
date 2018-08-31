'use strict';

var str = '𠮷',
    str2 = '张';
console.log(str.length, str2.length);
console.log(str.charAt(0), str2.charAt(0));
console.log(str.charAt(1));
console.log(str.charCodeAt(0), str2.charCodeAt(0));
console.log(str.codePointAt(0));
var num = str.codePointAt(0).toString(16);
console.log(String.fromCodePoint('0x' + num));