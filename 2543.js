var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var casoTeste = input.shift().split(" ");
var numeroDeCasos = casoTeste[0];
var id = parseInt(casoTeste[1]);
var counter = 0;

var teste = input.map((item) => {
    return item.split(" ");
})

console.log(teste)

teste.forEach((array) => {
    var num = parseInt(array[1]);
    var id1 = parseInt(array[0]);
    if (num === 0 && id === id1) {
        counter++
    }
})


console.log(counter);
