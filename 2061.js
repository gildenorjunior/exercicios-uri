var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var valores = input.shift();
var valoresSeparados = valores.split(" ");

var n = valoresSeparados[0];
var m = valoresSeparados[1];


for (let index = 0; index < m; index++) {
    if(input[index] == 'fechou') {
        n++;
    } else {
        n--;
    }
}

console.log(n);