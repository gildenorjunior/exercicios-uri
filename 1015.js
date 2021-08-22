var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

//pegando os valores da primeira linha
let linha1 = lines[0].split(' ').map((item) => parseFloat(item));
x1 = linha1[0];
y1 = linha1[1];

//pegando os valores da segunda linha
let linha2 = lines[1].split(' ').map((item) => parseFloat(item));
x2 = linha2[0];
y2 = linha2[1];

let distancia = Math.sqrt( Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(distancia.toFixed(4));