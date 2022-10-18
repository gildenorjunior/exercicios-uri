var [qtdComidas, qtdPessoas] = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var total = 0;

var comidas = qtdComidas.split(' ').map((item) => {
    return parseInt(item);
});

var pessoas = qtdPessoas.split(' ').map((item) => {
    return parseInt(item);
});

for (let i = 0; i < 3; i++) {
    var diferenca = comidas[i] - pessoas[i];

    if (comidas[i] - pessoas[i] < 0) {
        total += diferenca
    }
}

console.log(Math.abs(total));
