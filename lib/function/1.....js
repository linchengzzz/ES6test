"use strict";

var sortNumbers = function sortNumbers() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.sort();
};
console.log(sortNumbers(4, 1, 4, 5, 6, 7, 1, 2, 9));