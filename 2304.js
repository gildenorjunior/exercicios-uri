var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var [valorTodos, qtdRodadas] = input.shift().split(' ');

parseInt(valorTodos);

let D = +valorTodos;
let E = +valorTodos;
let F = +valorTodos;

for (let i = 0; i < qtdRodadas; i++) {
    if (input[i].split(' ').length == 3) {
        [tipoOperacao, pessoa, valor] = input[i].split(' ');
    } else if (input[i].split(' ').length == 4) {
        [tipoOperacao, pessoaRecebe, pessoaPaga, valor] = input[i].split(' ');
    }

    parseInt(valor);
    parseInt(D);
    parseInt(E);
    parseInt(F);

    if (tipoOperacao == 'C') {
        if (pessoa == 'D') {
            D = parseInt(D) - parseInt(valor);
        } else if (pessoa == 'E') {
            E = parseInt(E) - parseInt(valor);
        } else if (pessoa == 'F') {
            F = parseInt(F) - parseInt(valor);
        }
    } else if (tipoOperacao == 'V') {
        if (pessoa == 'D') {
            D = parseInt(D) + parseInt(valor);
        } else if (pessoa == 'E') {
            E = parseInt(E) + parseInt(valor);
        } else if (pessoa == 'F') {
            F = parseInt(F) + parseInt(valor);
        }
    } else if (tipoOperacao == 'A') {
        if (pessoaRecebe == 'D') {
            D = parseInt(D) + parseInt(valor);
        } else if (pessoaRecebe == 'E') {
            E = parseInt(E) + parseInt(valor);
        } else if (pessoaRecebe == 'F') {
            F = parseInt(F) + parseInt(valor);
        }

        if (pessoaPaga == 'D') {
            D = parseInt(D) - parseInt(valor);
        } else if (pessoaPaga == 'E') {
            E = parseInt(E) - parseInt(valor);
        } else if (pessoaPaga == 'F') {
            F = parseInt(F) - parseInt(valor);
        }
    }


}
console.log(D, E, F);