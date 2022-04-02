var input = require('fs').readFileSync('stdin', 'utf8').split('\r\n');

input.forEach((valor) => {
    if (valor) {
        parseInt(valor);
        valor--;
        console.log(valor);
    }
});
