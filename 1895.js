var input = require("fs").readFileSync("stdin", "utf8").split("\r\n");

var dados = input[0].split(" ");
var N = parseInt(dados[0]);
var T = parseInt(dados[1]);
var L = parseInt(dados[2]);

var alice = 0;
var bob = 0;

for (let i = 1; i < N; i++) {
  if (Math.abs(+input[i] - T) <= L) {
    if (i % 2 != 0) {
      alice += Math.abs(+input[i] - T);
    } else {
      bob += Math.abs(+input[i] - T);
    }

    T = +input[i];
  }
}

console.log(alice + " " + bob);

// MINHA PRIMEIRA SOLUÇÃO
// let alice = 0;
// let bob = 0;

// [numeroDeCartas, cartaNaMesa, limite] = input[0]
//   .split(" ")
//   .map((item) => +item);

// input.shift();
// input.unshift(numeroDeCartas);

// array = input.map((item) => +item);

// for (let i = 1; i <= array.length; i++) {
//   const cartaSelecionada = array[i];
//   let subtracao = Math.abs(cartaNaMesa - cartaSelecionada);

//   if (subtracao <= limite) {
//     cartaNaMesa = cartaSelecionada;

//     if (i % 2 != 0) {
//       alice += subtracao;
//     } else {
//       bob += subtracao;
//     }
//   }
// }

// console.log(alice, bob);
