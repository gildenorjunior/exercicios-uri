var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

let qtdElementos = input.shift();

function ehPar(number) {
    return number % 2 === 0;
}

for (let i = 0; i < qtdElementos; i++) {
    const element = Number(input[i]);

    if (element > 0) {
        if (ehPar(element)) console.log('EVEN POSITIVE');
        if (!ehPar(element)) console.log('ODD POSITIVE');
    } else if (element < 0) {
        if (ehPar(element)) console.log('EVEN NEGATIVE');
        if (!ehPar(element)) console.log('ODD NEGATIVE');
    } else {
        console.log('NULL');
    }
}