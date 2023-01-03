var input = require('fs').readFileSync('stdin', 'utf8');

function ehPar(n) {
    return n % 2 === 0 ? n : '';
}

for (let i = 1; i <= input; i++) {
    if (ehPar(i)) {
        console.log(`${i}^2 = ${i ** 2}`);
    }
}


