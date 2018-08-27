/* 2.块级作用域 */

/* -------- ES6 的块级作用域 -------- */

function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}

function f() {
    console.log('I am outside!');
}

(function() {
    if (false) {
        // 重复声明一次函数f
        function f() {
            console.log('I am inside!');
        }
    }
    f();
})();

function f() {
    console.log('I am outside!');
}

(function() {
    function f() {
        console.log('I am inside!');
    }
    if (false) {
    }
    f();
})();
