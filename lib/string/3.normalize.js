'use strict';

console.log('\u01D1'.normalize() === 'O\u030C'.normalize());
console.log('O\u030C'.normalize('NFC').length); // 1
console.log('O\u030C'.normalize('NFD').length); // 2