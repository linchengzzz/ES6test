const f = () => console.log('now');
(
    () => new Promise(
        resolve => resolve(f())
    )
)();
console.log('next');