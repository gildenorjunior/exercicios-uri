var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\r\n');

var primeiraLinha = lines.shift();
var auxAnterior = 0;
var count = 0;

lines = lines.map((item) => {
    return item.split(' ');
}).sort((a, b) => {
    return a[1] - b[1];
});

lines.forEach((linha) => {
    [inicio, fim] = linha;
    inicio = parseInt(inicio);
    fim = parseInt(fim);

    if (inicio >= auxAnterior) {
        auxAnterior = fim;
        count += 1;
    }
})
console.log(count);