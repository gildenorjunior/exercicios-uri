// Escreva uma função que recebe dois parâmetros, min e max (mínimo e máximo), e retorna um array de números de acordo com o intervalo.
// Caso seja informado (1, 5) o array será: [1,2,3,4,5]

const minhaFuncao = (min, max) => {
    let array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);        
    }

    return array;
}

console.log(minhaFuncao(1,5)); //[1,2,3,4,5]
console.log(minhaFuncao(11,18)); // [11,12,13,14,15,16,17,18]
console.log(minhaFuncao(-5,5)); //[-5,-4,-3,-2,-1,0,1,2,3,4,5]