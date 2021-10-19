//EXEMPLO DE FUNCÃO RECURSIVA
//IMPRIME A SEQUENCIA DE VALORES APARTIR DE UM INPUT DE FORMA REGRESSIVA ATÉ 1.
var regressiva = (i) => {
    console.log(i);

    if(i <= 1){ //CASO-BASE: DETERMINA ONDE O A FUNÇÃO PARA, ASSIM NÃO FICANDO EM LOOP INFINITO.
        return
    } else {
        regressiva(i - 1); //CASO-RECURSIVO: É ONDE CHAMA A PRÓPRIA FUNÇÃO.
    }
}

regressiva(4);