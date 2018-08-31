'use strict';

var f = function f() {
    return console.log('now');
};
(function () {
    return new Promise(function (resolve) {
        return resolve(f());
    });
})();
console.log('next');