var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

let qtdCasosDeTeste = parseInt(input.shift());

for (let i = 0; i < qtdCasosDeTeste; i++) {
    const linha = input[i].split('');
    let pedraDireita = 0;
    let pedraEsquerda = 0;
    let qtdDiamantes = 0;

    for (let j = 0; j < linha.length; j++) {
        const element = linha[j];

        if (element == '>') pedraEsquerda += 1;
        if (element == '<') {
            pedraEsquerda += 1;
        }

        console.log(element);
    }
}
