//RETORNA O INDICE DO MENOR ELEMENTO DENTRO DA LISTA.
var buscaMenorElemento = (array) => {
    var menor = array[0];
    var menor_indice = 0;

    for (let indice in array) {
        if (array[indice] < menor) {
            menor = array[indice];
            menor_indice = indice;
        }
    }

    return menor_indice;
}

//ORDENA OS ELEMENTOS DO ARRAY REMOVENDO OS DE MENOR INDICE COM A FUNÇÃO ACIMA E ADICIONANDO-OS A UM NOVO ARRAY.
var ordenacaoPorSelecao = (array) => {
    var novoArray = [];

    //OBS: Tamanho fixado aqui fora do loop pq se for definido do próprio loop a cada iteração o tamanho diminui.
    const tamanhoFixoDoArray = array.length;

    for (let indice = 0; indice < tamanhoFixoDoArray; indice++) {
        let indiceDoMenorElemento = buscaMenorElemento(array);
        novoArray.splice(indice, 0, array.splice(indiceDoMenorElemento, 1).shift());
    }

    return novoArray;
}

var array = [5, 3, 6, 2, 10];

console.log(ordenacaoPorSelecao(array));