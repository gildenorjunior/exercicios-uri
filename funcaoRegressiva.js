'use strict';
//EXEMPLO DE FUNCÃO RECURSIVA
//IMPRIME A SEQUENCIA DE VALORES APARTIR DE UM INPUT DE FORMA REGRESSIVA ATÉ 1.
var regressiva = (i) => {
    console.log(i);

    if (i <= 1) { //CASO-BASE: DETERMINA ONDE O A FUNÇÃO PARA, ASSIM NÃO FICANDO EM LOOP INFINITO.
        return
    } else {
        regressiva(i - 1); //CASO-RECURSIVO: É ONDE CHAMA A PRÓPRIA FUNÇÃO.
    }
}
// regressiva(4);


//SOMA OS ELEMENTOS DENTRO DE UMA LISTA DE FORMA RECURSIVA
var soma = (array) => {
    if (array.length == 1) return array[0]
    return array[0] + soma(array.slice(1));
}
// console.log(soma([1, 2, 3, 4, 5]));


//CONTA A QUANTIDADE ITENS DENTRO DE UMA LISTA DE FORMA RECURSIVA
var contaItensNoArray = (array) => {
    if (array.length == 0) return 0
    return 1 + contaItensNoArray(array.slice(1));
}
// console.log(contaItensNoArray([1,2,3,4,5,6]));


//ENCONTRA O MAIOR NUMERO DENTRO DE UM ARRAY DE FORMA RECURSIVA
function max(array) {
    if (array.length === 2) return array[0] > array[1] ? array[0] : array[1];
    let sub_max = max(array.slice(1));
    return array[0] > sub_max ? array[0] : sub_max;
}
