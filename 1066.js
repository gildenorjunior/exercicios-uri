var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

function ehImpar(n) {
    return n % 2 !== 0;
}

for (let i = 0; i < 5; i++) {
    const element = Number(input[i]);

    if (element > 0) {
        positivo++;
    } else if (element < 0) {
        negativo++;
    }

    if (ehImpar(element)) {
        impar++;
    } else {
        par++;
    }
}

console.log(par, 'valor(es) par(es)');
console.log(impar, 'valor(es) impar(es)');
console.log(positivo, 'valor(es) positivo(s)');
console.log(negativo, 'valor(es) negativo(s)');




// 3 valor(es) par(es)
// 2 valor(es) impar(es)
// 1 valor(es) positivo(s)
// 3 valor(es) negativo(s)