'use strict';

var _Reflect$ownKeys;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log(Reflect.ownKeys((_Reflect$ownKeys = {}, _defineProperty(_Reflect$ownKeys, Symbol(), 0), _defineProperty(_Reflect$ownKeys, 'b', 0), _defineProperty(_Reflect$ownKeys, 10, 0), _defineProperty(_Reflect$ownKeys, 2, 0), _defineProperty(_Reflect$ownKeys, 'a', 0), _Reflect$ownKeys)));
// ['2', '10', 'b', 'a', Symbol()]
var obj = {
    foo: 123,
    get bar() {
        return 'abc';
    }
};

console.log(Object.getOwnPropertyDescriptors(obj));