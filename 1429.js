var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\r\n');

function fatorial(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}

for (let i = 0; i < lines.length; i++) {
    if (lines[i] == 0) {
        break;
    }

    let tamanhoDoCasoDeTeste = lines[i].length
    let aux = tamanhoDoCasoDeTeste;
    let acumulador = 0;

    for (let j = 0; j < tamanhoDoCasoDeTeste; j++) {
        acumulador += lines[i][j] * fatorial(aux--)
    }
    console.log(acumulador)
}