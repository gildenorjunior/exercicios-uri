// Escreva uma função que recebe um número como parâmetro.
// Se o número for par, retorna true e se for ímpar, retonar false.

const ehPar = (num) => num % 2 === 0;

console.log(ehPar(8)); //true
console.log(ehPar(-10)); //true
console.log(ehPar(7)); //false
console.log(ehPar(-41)); //false