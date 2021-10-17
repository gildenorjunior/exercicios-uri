var input = require('fs').readFileSync('stdin', 'utf8').split("\n");

var PI = 3.14159;
 
var raio = parseFloat(input);
var volume = ( 4 / 3.0 ) * PI * (raio * raio * raio);
console.log('VOLUME =', volume.toFixed(3));