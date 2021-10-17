var input = require('fs').readFileSync('stdin', 'utf8').split("\n");

const PESO_A = 2;
const PESO_B = 3;
const PESO_C = 5;

var a = parseFloat(input.shift());
var b = parseFloat(input.shift());
var c = parseFloat(input.shift());

console.log("MEDIA = " + parseFloat(((a * PESO_A) + (b * PESO_B) + (c * PESO_C)) / (PESO_A + PESO_B + PESO_C)).toFixed(1));

