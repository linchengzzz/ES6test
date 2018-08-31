// var thunkify = require('thunkify');
// var fs = require('fs');

// var read = thunkify(fs.readFile);
// read('package.json')(function(err, str) {
//     console.log(str);
// });
(async function () {
    for await (const x of ['a', 'b']) {
      console.log(x);
    }
  })();