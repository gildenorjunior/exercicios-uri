var input = require('fs').readFileSync('stdin', 'utf8').split("\n");

console.log("SOMA = " + (parseInt(input.shift()) + parseInt(input.shift())))