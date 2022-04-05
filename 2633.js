var input = require("fs").readFileSync("stdin", "utf8").split("\r\n");

function Carnes(tipo, validade) {
  this.tipo = tipo;
  this.validade = validade;
}

while (input.length && input) {
  PRIMEIRO_INDEX = 0;
  auxiliar = [];
  saida = [];

  //   RETIRO A QTD DO ARRAY INPUT
  let qtdPecasDeCarne = input.shift();

  //   PEGO A QTD DE CARNES E RODO O ARRAY
  for (let i = 0; i < qtdPecasDeCarne; i++) {
    const element = input[i].split(" ");

    // COLOCA A CARNE E A VALIDADE EM UM NOVO ARRAY
    auxiliar.push(new Carnes(element[0], element[1]));
  }

  //   RETIRA DO ARRAY TODAS AS CARNES JÁ PASSADAS
  input.splice(PRIMEIRO_INDEX, qtdPecasDeCarne);

  //   NO NOVO ARRAY FAZ O SORT
  auxiliar.sort((a, b) => a.validade - b.validade);

  //   CRIA UM NOVO ARRAY SÓ COM AS CARNES ORDENADAS
  saida = auxiliar.map((item) => {
    return item.tipo;
  });

  console.log(
    saida.toString().replace(/[ ]+/g, ", ").trim().replace(/[,]+/g, " ")
  );
}
