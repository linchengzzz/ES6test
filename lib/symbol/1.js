'use strict';

var s = Symbol('foo');
var obj = {};
obj[Symbol('fn')] = function () {
    return console.log(1);
};

var log = {};

log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');