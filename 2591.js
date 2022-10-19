var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

let qtdCasosTeste = parseInt(input.shift());

for (let i = 0; i < qtdCasosTeste; i++) {
    let caso = input[i];

    let regex = /(a{1,})/gi;
    let [s1, s2] = caso.match(regex);
    let maxA = s1.length * s2.length + 1;

    console.log('k'.padEnd(maxA, 'a'));
}


