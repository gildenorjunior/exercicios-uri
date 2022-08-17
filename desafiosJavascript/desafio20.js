// Escreva uma função que recebe dois arrays (a, b) como paramêtros.
// Crie um objeto onde as chaves serão os elementos de 'a' e os valores os elementos de 'b'.
// Caso 'a' tenha menos elementos, considere apenas os elementos 'a' e 'b' correspondentes.
// Caso 'b' tenha menos elementos, coloque null como valor correspondente em 'a'.
// Retorne o objeto.

const minhaFuncao = (a, b) => {
    const obj = {};
    for (let i = 0; i < a.length; i++) {
        if(b[i] === undefined) b[i] = null;
        obj[a[i]] = b[i];
    }

    return obj;
}

console.log(minhaFuncao(["a", "b", "c"], [1, 2, 3])); //{ a: 1, b: 2, c: 3 }
console.log(minhaFuncao(["w", "x", "y", "z"], [31, 11, 6, 2]));//{ w: 32, x: 11, y: 6, z: 2 }
console.log(minhaFuncao(["a", "b"], [1, 2, 3])); // { a: 1, b: 2 }
console.log(minhaFuncao(["w", "x", "y", "z"], [32, 11])); // { w: 31, x: 11, y: null, z: null }