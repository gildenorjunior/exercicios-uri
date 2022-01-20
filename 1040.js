'use strict';

var input = require("fs").readFileSync("stdin", "utf8").split(' ');

var [n1, n2, n3, valoresComQuebraDeLinha] = input;
var [n4, notaExame] = valoresComQuebraDeLinha.split('\r\n');
var pesos = [2, 3, 4, 1];

var media = parseFloat(((n1 * pesos[0]) + (n2 * pesos[1]) + (n3 * pesos[2]) + (n4 * pesos[3])) / 10).toFixed(1);

console.log("Media: " + media);
if(media >= 7.0){
    console.log("Aluno aprovado.");
} else if(media < 5.0){
    console.log("Aluno reprovado.");
} else if(media >= 5.0 && media <= 6.9) {
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + notaExame);
    var mediaFinal = (parseFloat(notaExame + media) / 2).toFixed(1);
    mediaFinal >= 5.0 ? console.log("Aluno aprovado.") : console.log("Aluno aprovado.");
    console.log("Media final: " + mediaFinal);
}



