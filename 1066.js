var input = require("fs").readFileSync("stdin", "utf8").split('\n');

var par = 0;
var impar = 0;
var positivo = 0;
var negativo = 0;

input.forEach((linha) => {
    +linha

    if (linha % 2 == 0) {
        par++;
    } else if (linha % 2 != 0) {
        impar++;
    } else if (linha < 0){
        negativo++;
    } else if(linha > 0){
        positivo++;
    }
})

console.log('par: ', par)
console.log('impar: ', impar)
console.log(negativo)
console.log(positivo)




// 3 valor(es) par(es)
// 2 valor(es) impar(es)
// 1 valor(es) positivo(s)
// 3 valor(es) negativo(s)