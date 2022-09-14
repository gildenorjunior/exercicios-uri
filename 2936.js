var input = require("fs").readFileSync("stdin", "utf8").split('\r\n').map(n => +n);

let porcaoCurupira = 300;
let porcaoBoitata = 1500;
let porcaoBoto = 600;
let porcaoMapinguari = 1000;
let porcaoIara = 150;
let porcaoDonaChica = 225;

let totalPorcoes = input.reduce((acumulador, elementoAtual, indice) => {
  switch (indice) {
    case 0:
      acumulador += elementoAtual * porcaoCurupira
      break;
    case 1:
      acumulador += elementoAtual * porcaoBoitata;
      break;
    case 2:
      acumulador += elementoAtual * porcaoBoto;
      break;
    case 3:
      acumulador += elementoAtual * porcaoMapinguari;
      break;
    case 4:
      acumulador += elementoAtual * porcaoIara;
      break;
  }
  return acumulador;
}, 0);

console.log(totalPorcoes + porcaoDonaChica);
