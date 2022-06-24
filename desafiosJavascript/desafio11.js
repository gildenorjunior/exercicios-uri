// Escreva uma função que recebe dois arrays como paramêtros.
// Retorne um único array contendo os valores dos dois arrays concatenados, removendo valores dupllicados, caso existam.

const minhaFuncao = (a, b) => {
    return [...new Set([...a,...b])];
};

console.log(minhaFuncao([1,2,3], [3,4,5])); //[1,2,3,4,5]
console.log(minhaFuncao([6,7],[8,9])); //[6,7,8,9]
console.log(minhaFuncao([-2,-1,0,1,2], [-1,1,2,3])); //[-2,-1,0,1,2,3]