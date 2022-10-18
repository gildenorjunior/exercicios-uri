var lista = [1, 3, 5, 7, 9];

function pesquisa(lista, item) {
    min = 0;
    max = lista.length - 1;

    while (min <= max) {
        meio = Math.round((min + max) / 2)
        chute = lista[meio]

        if (chute === item) {
            return console.log(meio)
        }

        if (chute > item) {
            max = meio - 1
        } else {
            min = meio + 1
        }
    }

    console.log('Não há ocrrência na lista...')
}

pesquisa(lista, 3);