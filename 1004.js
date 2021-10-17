var input = require('fs').readFileSync('stdin', 'utf8').split("\n");

console.log("PROD = " + (input.shift() * input.shift()));
