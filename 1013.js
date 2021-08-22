var input = require("fs").readFileSync("stdin", "utf8");
var valor = input.split(' ').map((item) => parseInt(item));

let A = valor[0];
let B = valor[1];
let C = valor[2];

let maiorAB = ((A+B) + Math.abs(A-B)) / 2;
let maiorNumero = ((maiorAB + C) + Math.abs(maiorAB - C)) / 2;

console.log(maiorNumero, 'eh o maior');