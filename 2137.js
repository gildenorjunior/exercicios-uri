var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\r\n');

var primeiraLinha = lines[0];
var arrAux = [];

while (lines.length && lines) {
    arrAux = lines.splice(0, +primeiraLinha + 1);
    arrAux.shift();
    arrAux.sort().forEach((item) => {
        console.log(item);
    })
    primeiraLinha = lines[0];
}

