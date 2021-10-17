var input = require('fs').readFileSync('stdin', 'utf8').split("\n");

var idFuncionario = input.shift();
var horasTrabalhadas = input.shift();
var valorHora = input.shift();

var salario = parseFloat(horasTrabalhadas * valorHora);
console.log("NUMBER = " + idFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));
