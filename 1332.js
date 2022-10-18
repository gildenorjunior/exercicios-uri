var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

let qtdPalavras = parseInt(input.shift());

for (let i = 0; i < qtdPalavras; i++) {
    let palavra = input[i];
    if (palavra.length === 3) {
        let primeiraCombinacao = palavra[0] === 'o' && palavra[1] === 'n';
        let segundaCombinacao = palavra[1] === 'n' && palavra[2] === 'e';
        let terceiraCombinacao = palavra[0] === 'o' && palavra[2] === 'e';

        if (primeiraCombinacao || segundaCombinacao || terceiraCombinacao) {
            console.log(1);
        } else {
            console.log(2);
        }
    } else if (palavra.length === 5) {
        console.log(3);
    }
}