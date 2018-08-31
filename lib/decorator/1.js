'use strict';

var _class;

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

var MyTestableClass =
    testable(
        (_class = function MyTestableClass() {
            _classCallCheck(this, MyTestableClass);
        })
    ) || _class;

function testable(target) {
    target.isTestable = true;
}

MyTestableClass.isTestable; // true
