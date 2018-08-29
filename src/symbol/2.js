class T1 extends Promise {
}

class T2 extends Promise {
    static get [Symbol.species]() {
        return Promise;
    }
}

console.log(new T1(r => r()).then(v => v) instanceof T1) // true
console.log(new T2(r => r()).then(v => v) instanceof T2 )// false
console.log(new T1(r => r()).then(v => v) instanceof Promise )// false
console.log(new T2(r => r()).then(v => v) instanceof Promise )// false
