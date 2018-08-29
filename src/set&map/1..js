// const s = new Set();
//
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
//
// for (let i of s) {
//     console.log(i);
// }
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size); // 5
console.log(items);

for (let i = 0; i < items.size; i++) {
    const item = items[i];
    console.log(item);
}
for (const item of items.values()) {
    console.log(item);
}
items.forEach(item => console.log(item))
