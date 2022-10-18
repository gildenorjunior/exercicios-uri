var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var qtdCasosTeste = input.shift();
var soma = 0;

for (let i = 0; i < qtdCasosTeste; i++) {
    const [t, v] = input[i].split(' ');
    soma += t * v;
}

console.log(soma)
