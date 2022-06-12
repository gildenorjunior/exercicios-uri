var input = require("fs").readFileSync("stdin", "utf8").split("\r\n");

var qtdCasosDeTeste = +input[0];
var somaTotal = 1;
var suporte = "1";

for (let i = 1; i <= qtdCasosDeTeste; i++) {
  const N = +input[i];

  var conjuntoDeNumerosUm = suporte.repeat(N).split("");

  for (let i = 0; i < conjuntoDeNumerosUm.length; i++) {
    const cadaNumeroUm = +conjuntoDeNumerosUm[i];
    if (i != 0) {
      if (i % 2 == 0) {
        somaTotal = somaTotal + cadaNumeroUm;
      } else {
        somaTotal = somaTotal - cadaNumeroUm;
      }
    }
  }

  console.log(somaTotal);
  somaTotal = 1;
}
