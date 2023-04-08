var input = require('fs').readFileSync('stdin', 'utf8').split("\r\n");

var [nLinhas] = input;

for (let i = 1; i <= nLinhas; i++) {
    console.log(`${i} ${i * i} ${(i * i) * i}`)
}