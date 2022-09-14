var input = require('fs').readFileSync('stdin', 'utf8');

let inicio = 97;
let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < 26; i++) {
    if (i == 25) {
        process.stdout.write(`${inicio++} e ${alfabeto[i]}`);
    } else {
        console.log(inicio++, 'e', alfabeto[i]);
    }
}