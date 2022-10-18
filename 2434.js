var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

const primeiraLinha = input[0].split(' ');

input.shift();
input.unshift(primeiraLinha[1]);

var menor = +input[0];
var soma = 0;

for (var item of input) {
    soma += +item;

    if (soma < menor) {
        menor = soma;
    }
}

console.log(menor);