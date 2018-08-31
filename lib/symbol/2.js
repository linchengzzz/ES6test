"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var T1 = function (_Promise) {
    _inherits(T1, _Promise);

    function T1() {
        _classCallCheck(this, T1);

        return _possibleConstructorReturn(this, (T1.__proto__ || Object.getPrototypeOf(T1)).apply(this, arguments));
    }

    return T1;
}(Promise);

var T2 = function (_Promise2) {
    _inherits(T2, _Promise2);

    function T2() {
        _classCallCheck(this, T2);

        return _possibleConstructorReturn(this, (T2.__proto__ || Object.getPrototypeOf(T2)).apply(this, arguments));
    }

    _createClass(T2, null, [{
        key: Symbol.species,
        get: function get() {
            return Promise;
        }
    }]);

    return T2;
}(Promise);

console.log(new T1(function (r) {
    return r();
}).then(function (v) {
    return v;
}) instanceof T1); // true
console.log(new T2(function (r) {
    return r();
}).then(function (v) {
    return v;
}) instanceof T2); // false
console.log(new T1(function (r) {
    return r();
}).then(function (v) {
    return v;
}) instanceof Promise); // false
console.log(new T2(function (r) {
    return r();
}).then(function (v) {
    return v;
}) instanceof Promise); // false