var input = require('fs').readFileSync('stdin', 'utf8').split("\n");

var PESO_A = 3.5;
var PESO_B = 7.5;
var notaA = parseFloat(input.shift());
var notaB = parseFloat(input.shift());

console.log("MEDIA = " + (((notaA * PESO_A) + (notaB * PESO_B)) / (PESO_A + PESO_B)).toFixed(5));
