'use strict';

function _asyncIterator(iterable) { if (typeof Symbol === "function") { if (Symbol.asyncIterator) { var method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { return iterable[Symbol.iterator](); } } throw new TypeError("Object is not async iterable"); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// var thunkify = require('thunkify');
// var fs = require('fs');

// var read = thunkify(fs.readFile);
// read('package.json')(function(err, str) {
//     console.log(str);
// });
_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, x;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = _asyncIterator(['a', 'b']);

        case 5:
          _context.next = 7;
          return _iterator.next();

        case 7:
          _step = _context.sent;
          _iteratorNormalCompletion = _step.done;
          _context.next = 11;
          return _step.value;

        case 11:
          _value = _context.sent;

          if (_iteratorNormalCompletion) {
            _context.next = 18;
            break;
          }

          x = _value;

          console.log(x);

        case 15:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 18:
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context['catch'](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 24:
          _context.prev = 24;
          _context.prev = 25;

          if (!(!_iteratorNormalCompletion && _iterator.return)) {
            _context.next = 29;
            break;
          }

          _context.next = 29;
          return _iterator.return();

        case 29:
          _context.prev = 29;

          if (!_didIteratorError) {
            _context.next = 32;
            break;
          }

          throw _iteratorError;

        case 32:
          return _context.finish(29);

        case 33:
          return _context.finish(24);

        case 34:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this, [[3, 20, 24, 34], [25,, 29, 33]]);
}))();