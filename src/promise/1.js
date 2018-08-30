// const promise = new Promise((resolve, reject) => {
//     if(null) {
//         resolve(value)
//     } else {
//         reject(error);
//     }
// });

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//       setTimeout(resolve, ms, 'done');
//     });
//   }

//   timeout(1000).then((value) => {
//     console.log(value);
//   });

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(p1), 1000);
// });

// p2.then(result => console.log(result)).catch(error => console.log(error));
// Error: fail

Promise.reject(3).finally(() => {})