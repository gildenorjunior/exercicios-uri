// Se a letra for maiúscula, deve-se subtrair o primeiro dígito do segundo. Se a letra for minúscula, deve-se somar ambos os dígitos e se os DÍGITOS forem iguais, deve-se desconsiderar a letra e mostrar o produto entre os dois dígitos.

var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var casosTeste = input.shift();

for (let i = 0; i < casosTeste; i++) {
    const letra = input[i].split('')[1];
    const primeiroDigito = +input[i].split('')[0];
    const segundoDigito = +input[i].split('')[2];

    if (primeiroDigito === segundoDigito) {
        console.log(primeiroDigito * segundoDigito);
    } else if (letra === letra.toLowerCase()) {
        console.log(primeiroDigito + segundoDigito);
    } else if (letra === letra.toUpperCase()) {
        console.log(segundoDigito - primeiroDigito);
    }
}