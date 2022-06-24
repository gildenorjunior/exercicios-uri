// Escreva uma função que recebe um array (a) e uma flag (order) com valor padrão 'asc'. Caso o valor de (order) seja 'asc' retornar o array ordenado em ordem ascendente e caso seja 'desc' retornar em ordem descendente.

const ordena = (a, order = "asc") => {
    return order === 'asc' ? a.sort() : a.sort().reverse();
}

console.log(ordena([2,3,1], "asc")); //[1,2,3]
console.log(ordena([6,2,8,1,5], "desc")); //[8,6,5,2,1]
console.log(ordena(["uva", "maça", "laranja"], "asc")); //["laranja", "maça", "uva"]
console.log(ordena(["t", "a", "s", "z", "m"])); //["a", "m", "s", "t", "z"]