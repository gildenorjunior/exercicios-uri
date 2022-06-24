// Escreva uma função que recebe um array "a" e um número "b" como paramêtros.
// Faça a soma de todos os elementos do array com valor maior do que "b".
// Retorne a soma.

const minhaFuncao = (a, b) => {
    return a.reduce((acumulador, atual) => atual > b ? acumulador + atual : 0);
};

console.log(minhaFuncao([1,2,3,4,5,6,7,8], 3)); //30
console.log(minhaFuncao([-14,-12,-5,4,-4], 5)); //0
console.log(minhaFuncao([33,45,88,105,111], 99)); // 216
