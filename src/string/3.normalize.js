console.log('\u01d1'.normalize() === '\u004f\u030c'.normalize());
console.log('\u004F\u030C'.normalize('NFC').length); // 1
console.log('\u004F\u030C'.normalize('NFD').length); // 2
