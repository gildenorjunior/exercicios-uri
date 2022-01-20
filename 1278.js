var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var maior = 0;
var N = +input[0];
var index = 1;
var i;

while (N !== 0) {
    maior = 0;

    //PEGA O BLOCO DE FRASES DE ACORDO COM O 'N' PASSADO
    for (i = index; i < index + N; i++) {

        //CORTA OS ESPAÇOS DESNECESSÁRIOS
        input[i] = input[i].trim().replace(/[ ]+/g, ' ');

        //PEGA O TAMANHO DA MAIOR FRASE
        if (input[i].length > maior) {
            maior = input[i].length;
        }
    }

    for (i = index; i < index + N; i++) {

        //PEGA O VALOR DA MAIOR FRASE E ATRIBUI O PADSTART PARA O RESTANTE DAS FRASES
        console.log(input[i].padStart(maior));
    }


    N = +input[index + N];

    if (N !== 0) {
        console.log('');
    }

    index = i + 1;
}

// console.log(input[0])
var teste = input.slice(+input[0] + 1);

console.log(teste);