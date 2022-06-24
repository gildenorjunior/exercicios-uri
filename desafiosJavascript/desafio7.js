// Escreva uma função que recebe duas strings (a, b) como parâmetro e retorna o número de vezes que a string (a) é utilizada dentro de (b).

const minhaFuncao = (a, b) => {
    return b.match(new RegExp(a, 'gi')).length;
    // return b.toLowerCase().split(a.toLowerCase()).length;
}

console.log(minhaFuncao('a', 'Quantas vezes o valor de "a" ocorre aqui?')); //5
console.log(minhaFuncao('as', 'Quantas vezes o valor de "a" ocorre aqui?')); //1
console.log(minhaFuncao('q', 'Quantas vezes o valor de "a" ocorre aqui?')); //2