// do {
//     let a = 1;
// }
// console.log('中' === '\u4e2d' );// true
// x|>f

// 传统的写法
exclaim(capitalize(doubleSay('hello')))
// "Hello, hello!"

// 管道的写法
'hello'
  |> doubleSay
  |> capitalize
  |> exclaim
// "Hello, hello!"

let budget = 1_000_000_000_000;
budget === 10 ** 12 // true
