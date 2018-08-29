const REGEX = /a/g;

// 指定从2号位置（y）开始匹配
REGEX.lastIndex = 2;

// 匹配成功
const match = REGEX.exec('xaya');

// 在3号位置匹配成功
console.log(match.index); // 3

// 下一次匹配从4号位开始
console.log(REGEX.lastIndex); // 4

// 4号位开始匹配失败
REGEX.exec('xaya') // null
