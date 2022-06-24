// Escreva uma função que recebe um array por parâmetro e remove os 3 primeiros elementos do array.

// Caso o array tenha menos de 3 elementos, retornar um array vazio.

const minhaFuncao = (array) => {
    return array.length > 3 ? array.slice(3) : [];
}

console.log(minhaFuncao([1,2,3,4,5])); //[4,5]
console.log(minhaFuncao([5,4,3,2,1,0])); //[2,1,0]
console.log(minhaFuncao([10,20,30])); //[]
console.log(minhaFuncao([99,100])); //[]