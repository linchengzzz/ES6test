'use strict';

// foo::bar;
// 等同于
// bar.bind(foo);

// foo::bar(...arguments);
// 等同于
// bar.apply(foo, arguments);

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
hasOwn(Array, 'splice');