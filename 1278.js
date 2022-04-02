var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var maior = 0;
var N = +input[0];

// while (N !== 0) {
    maior = 0;

    //PEGA O BLOCO DE FRASES DE ACORDO COM O 'N' PASSADO
    for (i = 0; i <= N; i++) {

        //CORTA OS ESPAÇOS DESNECESSÁRIOS
        input[i] = input[i].trim().replace(/[ ]+/g, ' ');

        //PEGA O TAMANHO DA MAIOR FRASE
        if (input[i].length > maior) {
            maior = input[i].length;
        }
    }

    for (i = 0; i <= N; i++) {

        //PEGA O VALOR DA MAIOR FRASE E ATRIBUI O PADSTART PARA O RESTANTE DAS FRASES
        input[i] = input[i].padStart(maior);
    }
    
    input = input.slice(N + 1);

    console.log(input)

    N = input[N + 1]; 

    if (N !== 0) {
        console.log('');
    }
// }