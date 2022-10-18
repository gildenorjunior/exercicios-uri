var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var qtdProdutos = input.shift();
var total = 0;

for (let i = 0; i < qtdProdutos; i++) {
    const [codProduto, qtd] = input[i].split(' ');

    switch (codProduto) {
        case '1001':
            total += qtd * 1.50;
            break;
        case '1002':
            total += qtd * 2.50;
            break;
        case '1003':
            total += qtd * 3.50;
            break;
        case '1004':
            total += qtd * 4.50;
            break;
        case '1005':
            total += qtd * 5.50;
            break;
        default:
            break;
    }
}

console.log(total.toFixed(2));