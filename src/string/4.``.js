const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
const data = [
    {first: '<Jane>', last: 'Bond'},
    {first: 'Lars', last: '<Croft>'},
];

console.log(tmpl(data));
console.log`123`

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
    strs[0] === undefined
    strs.raw[0] === "\\unicode and \\u{55}";
}
// tag`\unicode and \u{55}`
