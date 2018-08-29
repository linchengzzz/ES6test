console.log(Reflect.ownKeys({[Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0}));
// ['2', '10', 'b', 'a', Symbol()]
const obj = {
    foo: 123,
    get bar() { return 'abc' }
};

console.log(Object.getOwnPropertyDescriptors(obj));
