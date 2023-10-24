// console.log("HELLO WORLD!")

var slugify = require('slugify');

// let text = slugify('Hello World Hello World');
// console.log(text);

let text = slugify('Hello World Hello World', '*');
console.log(text);