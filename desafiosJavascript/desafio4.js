// Escreva uma função que recebe dois parâmetros (text, flag).
// Se a flag for igual a 'start', deve retornar os 3 primeiros números caracteres do parâmetro text.
// Se a flag for igual a 'end', deve retornar os 3 últimos caracateres do parâmetro text.
// Se o parâmetro text tiver menos de 3 caracteres, apenas retornar o text.

function minhaFuncao(text, flag = 'start') {
    if(text.length < 3) return text;

    if(flag === 'start'){
        return text.substring(0, 3);
    } else if(flag === 'end') {
        return text.substring(text.length - 3);
    }
}

console.log(minhaFuncao('abcdefg', 'start')); //abc
console.log(minhaFuncao('abcdefg', 'end')); //efg
console.log(minhaFuncao('ab', 'end')); //ab
console.log(minhaFuncao('abcdefg')); //abc