var input = require('fs').readFileSync('stdin', 'utf8').split('\r\n');

const ALFABETO = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];

let contador = 1;
while (input[0] != 0) {
    let palavra = [];
    let m = +input.shift();
    let valores = input.shift().split(' ');

    for (let i = 0; i < m; i++) {
        //CADA LETRA DE ACORDO COM O INDEX
        const indiceDoAlfabeto = (+valores[i] - 1);

        //GUARDANDO A LETRA PARA DEPOIS INCLUI-LA NO INICIO DO ARRAY
        let letraDaPalvra = ALFABETO[indiceDoAlfabeto];
        palavra.push(letraDaPalvra);

        //REMOVENDO A LETRA DO INDEX
        ALFABETO.splice(valores[i] - 1, 1);

        //ADICIONANDO A LETRA GUARDADA NA PRIMEIRA POSIÇÃO
        ALFABETO.unshift(letraDaPalvra);
    }

    console.log("Instancia", contador);
    console.log(palavra.toString().replace(/[,]+/g, ''));
    ALFABETO.sort();

    if (input.length - 1) {
        console.log();
    }
    contador++;
}