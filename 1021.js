var input = require("fs").readFileSync("stdin", "utf8");

var notas = [100, 50, 20, 10, 5, 2, 1.0, 0.50, 0.25, 0.10, 0.05, 0.01];

function divisao(valorParaDecompor, nota){
    return (valorParaDecompor / nota);
}

function restoDaDivisao(valorParaDecompor, nota){
    return (valorParaDecompor % nota);
}

function formataMensagemFinal(qtdNotas, nota){
    if(nota < 2){
        console.log(`${Math.trunc(qtdNotas)} moeda(s) de R$ ${nota}`)
    } else {
        
        console.log(`${Math.trunc(qtdNotas)} nota(s) de R$ ${nota}`);
    }
}

function decomposicao(valorParaDecompor){
    notas.forEach((nota) => {
        var qtdNotas = divisao(valorParaDecompor, nota);

        formataMensagemFinal(qtdNotas, nota);

        var restoDaDivisaoDaNota = restoDaDivisao(valorParaDecompor, nota);
        valorParaDecompor = restoDaDivisaoDaNota;
    });
}

decomposicao(input);

// var notaDeCem = Math.trunc(input / 100);
// var restoDaDivisaoPorCem = input % 100;

// var notaDeCinquenta = Math.trunc(restoDaDivisaoPorCem / 50);
// var restoDaDivisaoPorCinquenta = restoDaDivisaoPorCem % 50;

// var notaDeVinte = Math.trunc(restoDaDivisaoPorCinquenta / 20);
// var restoDaDivisaoPorVinte = restoDaDivisaoPorCinquenta % 20;

// var notaDeDez = Math.trunc(restoDaDivisaoPorVinte / 10);
// var restoDaDivisaoPorDez = restoDaDivisaoPorVinte % 10;

// var notaDeCinco = Math.trunc(restoDaDivisaoPorDez / 5);
// var restoDaDivisaoPorCinco = restoDaDivisaoPorDez % 5;

// var notaDeDois = Math.trunc(restoDaDivisaoPorCinco / 2);
// var restoDaDivisaoPorDois = restoDaDivisaoPorCinco % 2;

// var moedaDeUm = Math.trunc(restoDaDivisaoPorDois / 1);
// var restoDaDivisaoDaModeDeUm = restoDaDivisaoPorDois % 1;

// var moedaDeCinquenta = Math.trunc(restoDaDivisaoDaModeDeUm / 0.50);
// var restoDaDivisaoDaMoedaDeCinquenta = restoDaDivisaoDaModeDeUm % 0.50;

// var moedaDeVinteECinco = Math.trunc(restoDaDivisaoDaMoedaDeCinquenta / 0.25);
// var restoDaDivisaoDaMoedaDeVinteECinco = restoDaDivisaoDaMoedaDeCinquenta % 0.25;

// var moedaDeDez = Math.trunc(restoDaDivisaoDaMoedaDeVinteECinco / 0.10);
// var restoDaDivisaoDaMoedaDeDez = restoDaDivisaoDaMoedaDeVinteECinco % 0.10;

// var moedaDeCinco = Math.trunc(restoDaDivisaoDaMoedaDeDez / 0.05);
// var restoDaDivisaoDaMoedaDeCinco = restoDaDivisaoDaMoedaDeDez % 0.05;

// var moedaDeZeroUmCentavo = Math.trunc(restoDaDivisaoDaMoedaDeCinco / 0.01);
// var restoDaDivisaoDaMoedaDeUm = restoDaDivisaoDaMoedaDeCinco % 0.01;

// console.log("NOTAS:");
// console.log(Math.trunc(notaDeCem), " nota(s) de R$ 100.00");
// console.log(Math.trunc(notaDeCinquenta), " nota(s) de R$ 50.00");
// console.log(Math.trunc(notaDeVinte), " nota(s) de R$ 20.00");
// console.log(Math.trunc(notaDeDez), " nota(s) de R$ 10.00");
// console.log(Math.trunc(notaDeCinco), " nota(s) de R$ 5.00");
// console.log(Math.trunc(notaDeDois), " nota(s) de R$ 2.00");

// console.log("MOEDAS:");
// console.log(Math.trunc(moedaDeUm), " moeda(s) de 1.00");
// console.log(Math.trunc(moedaDeCinquenta), " moeda(s) de 0.50");
// console.log(Math.trunc(moedaDeVinteECinco), " moeda(s) de 0.25");
// console.log(Math.trunc(moedaDeDez), " moeda(s) de 0.10");
// console.log(Math.trunc(moedaDeCinco), " moeda(s) de 0.05");
// console.log(Math.trunc(moedaDeZeroUmCentavo), " moeda(s) de 0.01");
