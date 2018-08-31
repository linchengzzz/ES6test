// console.log(/\d+(?=%)/g.exec('100% 11% of US presidents have been male') ) // ["100"]

// console.log(/\d+(?!%)/g.exec('that’s all 44% of them'))             // ["44"]

// console.log(/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')) // ["100"]
// /(?<!\$)\d+/.exec('it’s is worth about €90')                // ["90"]
// /p{White_Space}/u

// const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
//
// const matchObj = RE_DATE.exec('1999-12-31');
// const year = matchObj.groups.year; // 1999
// const month = matchObj.groups.month; // 12
// const day = matchObj.groups.day; // 31
// console.log(year, month, day)

// const str = '12!12!12!';
// console.log(str.matchAll(/\d+\!/))
"use strict";