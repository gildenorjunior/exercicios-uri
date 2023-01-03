var input = require('fs').readFileSync('stdin', 'utf8').split('\r\n');
const primeiroElemento = input.shift();
let countIn = 0;
let countOut = 0;

for (let i = 0; i < primeiroElemento; i++) {
    const e = input[i];
    if (e >= 10 && e <= 20) {
        countIn++;
    } else {
        countOut++;
    }
}

console.log(countIn, 'in');
console.log(countOut, 'out');