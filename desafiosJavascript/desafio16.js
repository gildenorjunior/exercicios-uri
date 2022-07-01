// Escreva uma função que recebe dois arrays (a, b) como parâmetros e crie um objeto onde as propriedades/chaves sejam os itens do array 'a' e os valores sejam os itens do array b.
// Retorne o objeto

const minhaFuncao = (a, b) => {
    var obj = {};

    for(var i = 0; i < a.length; i++){
        Object.defineProperty(obj, a[i], {
            value: b[i],
            configurable: true,
            enumerable: true,
            writable: true
        });
    }

    return obj
}

console.log(minhaFuncao(['a','b','c'], [1,2,3])); //{a:1, b:2, c:3}
console.log(minhaFuncao(['w','x','y','z'], [10,11,12,13])); //{w:10,x:11,y:12,z:13}
console.log(minhaFuncao([1,'b'], ['a', 2])); //{1:'a', b:2}