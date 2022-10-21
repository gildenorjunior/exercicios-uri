var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

let qtdCasosDeTeste = parseInt(input.shift());

for (let i = 0; i < qtdCasosDeTeste; i++) {
    const linha = input[i];
    let arrCharCode = [];

    for (let j = 0; j < linha.length; j++) {
        const regex = /([A-Z])/gi;
        const letraMaiusculaMinuscula = linha[j].match(regex);

        if (letraMaiusculaMinuscula === null) {
            arrCharCode.push(linha[j]);
        } else {
            arrCharCode.push(String.fromCharCode(linha.charCodeAt(j) + 3));
        }
    }

    let arrReverse = arrCharCode.reverse().join('');
    let arrTerceiraEtapa = [];

    for (let k = Math.trunc(arrReverse.length / 2); k < arrReverse.length; k++) {
        arrTerceiraEtapa.push(String.fromCharCode(arrReverse.charCodeAt(k) - 1));
    }

    console.log(arrReverse.slice(0, Math.trunc(arrReverse.length / 2)).concat(arrTerceiraEtapa.join('')));
}