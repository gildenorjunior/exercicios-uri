var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\r\n');

var alfabetoNovo = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < lines.length; i++) {
    var frase = lines[i].split(' ');
    var abreviacoes = [];
    var alfabeto = [...alfabetoNovo];

    if (frase == '.') {
        break;
    }

    for (let j = 0; j < frase.length; j++) {
        var palavra = frase[j];
        var primeiraLetra = palavra[0];

        var palavrasInciandoComMesmaLetra = frase.filter((palavraArray) => {
            return primeiraLetra == palavraArray[0];
        });

        if (palavrasInciandoComMesmaLetra.length > 1) {
            // var maior = 0;
            // var maiorPalavraComInicialRepetida;

            // palavrasInciandoComMesmaLetra.forEach((palavra) => {
            //     if (palavra.length > maior) {
            //         maior = palavra.length;
            //         maiorPalavraComInicialRepetida = palavra;
            //     }
            // })

            palavrasInciandoComMesmaLetra.
                console.log(palavrasInciandoComMesmaLetra);
        }

        if (palavra.length > 2 && alfabeto.includes(primeiraLetra)) {

            //aqui eu jogo a primeira letra das palavras abreviadas
            abreviacoes.push(primeiraLetra);
            alfabeto.splice(alfabeto.indexOf(primeiraLetra), 1);
        } else {

            //aqui eu jogo as palavra que não estão abreviadas ou que são pequenas
            abreviacoes.push(palavra)
        }

    }
    console.log();
    // console.log(abreviacoes.join('. '));
}


