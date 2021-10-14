var input = require("fs").readFileSync("stdin", "utf8");

var notas = [100, 50, 20, 10, 5, 2];
var moedas = [1.0, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:");
notas.forEach((nota) => {
    console.log(`${parseInt(input / nota)} nota(s) de R$ ${nota.toFixed(2)}`);1
    input %= nota;
});

console.log("MOEDAS:");
moedas.forEach((moeda) => {
    console.log(`${parseInt(input / moeda)} moeda(s) de R$ ${moeda.toFixed(2)}`);
    input = (input % moeda) + 0.00001;
});



// function divisao(valorParaDecompor, nota){
//     return (valorParaDecompor / nota);
// }

// function restoDaDivisao(valorParaDecompor, nota){
//     return (valorParaDecompor % nota);
// }

// function decomposicao(valorParaDecompor){
//     console.log("NOTAS: ");
//     notas.forEach((nota) => {
//         var qtdNotas = divisao(valorParaDecompor, nota);
        
//         console.log(`${Math.trunc(qtdNotas)} nota(s) de R$ ${nota}`);

//         var restoDaDivisaoDaNota = restoDaDivisao(valorParaDecompor, nota);
//         valorParaDecompor = restoDaDivisaoDaNota;
//     });

//     console.log("MOEDAS: ");
//     moedas.forEach((moedas) => {
//         var qtdNotas = divisao(valorParaDecompor, moedas);
        
//         console.log(`${Math.trunc(qtdNotas)} moeda(s) de R$ ${moedas}`)

//         var restoDaDivisaoDaNota = restoDaDivisao(valorParaDecompor, moedas);
//         valorParaDecompor = restoDaDivisaoDaNota;
//     })
// }

// decomposicao(input);
