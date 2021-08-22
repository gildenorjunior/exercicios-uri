var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valor = lines[0];

console.log(valor * 2 + ' minutos');