var input = require('fs').readFileSync('stdin', 'utf8').split("\n");

var primeiraPeca = input.shift().split(' ');
var codPrimeiraPeca = parseInt(primeiraPeca.shift());
var qtdPrimeiraPeca = parseInt(primeiraPeca.shift());
var valorPrimeiraPeca = parseFloat(primeiraPeca.shift());

var segundaPeca = input.shift().split(' ');
var codSegundaPeca = parseInt(segundaPeca.shift());
var qtdSegundaPeca = parseInt(segundaPeca.shift());
var valorSegundaPeca = parseFloat(segundaPeca.shift());

var valorAPagar = ((qtdPrimeiraPeca * valorPrimeiraPeca) + (qtdSegundaPeca * valorSegundaPeca));

console.log("VALOR A PAGAR: R$ " + valorAPagar.toFixed(2));