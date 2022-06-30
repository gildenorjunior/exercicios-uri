// Escreva uma função que recebe dois parâmetros (a, b) sendo 'a' um objeto e 'b' uma string
// Retorne true se o objeto 'a' conter a propriedade/chave com o nome passado em 'b'
// Caso contrário, retorne false.

const minhaFuncao = (objeto, b) => {
    return b in objeto
    // return Object.keys(objeto).some((item) => {
    //     return item === b;
    // })
}

console.log(minhaFuncao({ a: 1, b: 2, c: 3 }, "b")); //true
console.log(minhaFuncao({ x: 'a', y: 'b', z: 'c' }, 'a')); //false
console.log(minhaFuncao({ x: 'a', y: 'b', z: 'c' }, 'z')); //true