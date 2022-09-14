var input = require("fs").readFileSync("stdin", "utf8");

let acumulador = 1;

for (let i = +input; i >= 1; i--) {
    acumulador = acumulador * i;
}

console.log(acumulador)
