'use strict';

var _templateObject = _taggedTemplateLiteral(['123'], ['123']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var tmpl = function tmpl(addrs) {
  return '\n  <table>\n  ' + addrs.map(function (addr) {
    return '\n    <tr><td>' + addr.first + '</td></tr>\n    <tr><td>' + addr.last + '</td></tr>\n  ';
  }).join('') + '\n  </table>\n';
};
var data = [{ first: '<Jane>', last: 'Bond' }, { first: 'Lars', last: '<Croft>' }];

console.log(tmpl(data));
console.log(_templateObject);

// tag`First line\nSecond line`
//
// function tag(strings) {
//     console.log(strings.raw[0]);
//     // strings.raw[0] 为 "First line\\nSecond line"
//     // 打印输出 "First line\nSecond line"
// }
// let bad = `bad escape sequence: \unicode`; // 报错
// console.log(bad);
function tag(strs) {
  strs[0] === undefined;
  strs.raw[0] === '\\unicode and \\u{55}';
}
// tag`\unicode and \u{55}`