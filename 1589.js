var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var qtdCasosTeste = input.shift();

for (let i = 0; i < qtdCasosTeste; i++) {
    const [r1, r2] = input[i].split(' ');
    console.log(parseInt(r1) + parseInt(r2));
}
