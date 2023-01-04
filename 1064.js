var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');
const QTD_VALORES = 6;
let qtdPositivos = 0;
let soma = 0;

for (let i = 0; i < QTD_VALORES; i++) {
    const element = Number(input[i]);

    if (element > 0) {
        qtdPositivos++;
        soma += element;
    }
}

console.log(qtdPositivos, 'valores positivos');
console.log((soma / qtdPositivos).toFixed(1));

