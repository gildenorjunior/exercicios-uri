var lista = [1,3,5,7,9];

function pesquisa(lista, item){
    baixo = 0;
    alto = lista.length - 1;

    while(baixo <= alto) {
        meio = Math.round((baixo + alto) / 2)
        chute = lista[meio]

        if(chute === item){
            return console.log(meio)
        }

        if(chute > item){
            alto = meio - 1
        }else {
            baixo = meio + 1
        }
    }

    console.log('Não há ocrrência na lista...')
}

pesquisa(lista, 10);