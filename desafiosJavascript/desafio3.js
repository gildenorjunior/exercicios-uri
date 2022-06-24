// Escreva uma função que recebe 6 parâmetros (a, b, c, d, e, f).
// Faça a soma de a com b.
// O resultado da soma, subtraia o valor de c.
// O resultado da subtração, multiplique por d e faça divisão por e.
// E para finalizar, faça o resultado elevado à potência de f.

function realizaOperacoes(a, b, c, d, e, f) {
    return (((((a + b) - c) * d) / e) ** f);
}

console.log(realizaOperacoes(6,5,4,3,2,1)); // 10.5
console.log(realizaOperacoes(6,2,1,4,2,3)); // 2744
console.log(realizaOperacoes(2,3,6,4,2,3)); // -8