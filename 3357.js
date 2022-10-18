var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

let [qtdPessoas, litrosGarrafa, qtdCuia] = input[0].split(' ');
let nomes = input[1].split(' ');

parseFloat(litrosGarrafa);
parseFloat(qtdCuia);
parseInt(qtdPessoas);

contador = 0;
arrValor = [];
arrNomes = [];

for (let i = litrosGarrafa; Math.sqrt(parseFloat(i).toFixed(1)) > parseFloat(qtdCuia).toFixed(1); i -= qtdCuia) {
    arrValor.push(parseFloat(i).toFixed(1));
    if (nomes[contador]) {
        arrNomes.push(nomes[contador]);
    }
    contador == qtdPessoas - 1 ? contador = 0 : contador += 1;
}

if (arrNomes.length > 1 && arrValor.length > 1) {
    console.log(arrNomes[arrNomes.length - 1], arrValor[arrValor.length - 1])
} else {
    console.log(arrNomes[0], arrValor[0])
}