var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var [tempoGasto, velocidadeMedia] = lines;

var totalPercorrido = tempoGasto * velocidadeMedia;
var qtdCombustivelGasto = totalPercorrido / 12;

console.log(qtdCombustivelGasto.toFixed(3));