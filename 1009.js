var input = require('fs').readFileSync('stdin', 'utf8').split("\n");

var nome = input.shift();
var salario = parseFloat(input.shift());
var totalVendas = parseFloat(input.shift());

var comissao = salario + (totalVendas * 0.15);

console.log("TOTAL = R$ " + comissao.toFixed(2));
