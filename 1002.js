var input = require('fs').readFileSync('stdin', 'utf8');

var raio = input;
var N = 3.14159;

var area = parseFloat((N * Math.pow(raio, 2)));
console.log("A=" + area.toFixed(4));