var input = require('fs').readFileSync('stdin', 'utf8').split('\r\n');
let [x, y] = input.map(e => Number(e));
let soma = 0;

function ehImpar(n) {
    return n % 2 !== 0;
}

if (x > y) {
    for (let i = y + 1; i < x; i++) {
        if (ehImpar(i)) soma += i;
    }
} else {
    for (let i = x + 1; i < y; i++) {
        if (ehImpar(i)) soma += i;
    }
}

console.log(soma);