"use strict";

// const s = new Set();
//
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
//
// for (let i of s) {
//     console.log(i);
// }
var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size); // 5
console.log(items);

for (var i = 0; i < items.size; i++) {
    var item = items[i];
    console.log(item);
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = items.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _item = _step.value;

        console.log(_item);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

items.forEach(function (item) {
    return console.log(item);
});