// Escreva uma função que recebe um array (a) e um valor (b) como parâmetros. A função deve remover todas as ocorrências de (b) e retornar o array filtrado.

const minhaFuncao = (a, b) => a.filter(valor => valor !== b);

console.log(minhaFuncao([1,2,3],2)); //[1,3]
console.log(minhaFuncao([1,2, "3"], "3")); //[1,2]
console.log(minhaFuncao(["1", false, 2, "3"], false)); //["1",2,"3"]
console.log(minhaFuncao([5,1,2,5,3,5], 5)); //[1,2,3]