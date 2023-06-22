var input = require("fs").readFileSync("stdin", "utf8").split('\n')
let qtdCasosDeTeste = input.shift();

for (let i = 0; i < qtdCasosDeTeste; i++) {
    const [a, b] = input[i].split(' ');
    console.log(a.endsWith(b) ? 'encaixa' : 'nao encaixa');
}
