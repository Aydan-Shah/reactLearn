// // console.log("HELLO WORLD!")

// var slugify = require('slugify');

// // let text = slugify('Hello World Hello World');
// // console.log(text);

// let text = slugify('Hello World Hello World', '*');
// console.log(text);

// ES6++ modules, import, export, modulyar js

// import slugify from "slugify";

// let text = slugify('Hello World Hello World', '*');
// console.log(text);

import calcArea, {sayFullName} from "./my-first-module.js";
let area = calcArea(10, 45);
console.log(area);

let myName = sayFullName("Aydan");
console.log(myName)