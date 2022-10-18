var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var qtdCasosDeTeste = input.shift();

for (let i = 0; i < qtdCasosDeTeste; i++) {
    var valorAtual = input[i];
    const padraoRegex = /([a-z])/gi;

    valorAtual = valorAtual.replace(padraoRegex, '-');

    valorAtual = valorAtual.split('-').reduce((acum, atual) => {
        if (atual != '') {
            acum = parseInt(acum);
            atual = parseInt(atual);
            return acum + atual;
        } else {
            return acum;
        }
    }, 0);

    console.log(valorAtual);
}