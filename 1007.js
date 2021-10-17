var input = require('fs').readFileSync('stdin', 'utf8').split("\n");

var a = input.shift();
var b = input.shift();
var c = input.shift();
var d = input.shift();

console.log("DIFERENCA = " + ((a * b) - (c * d)));