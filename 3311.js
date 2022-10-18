var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

let qtdNomes = +input.shift();

let nomes = input.sort((a, b) => {
    if (a[0] > b[0]) {
        return 1;
    }
    if (a[0] < b[0]) {
        return -1;
    }
    return 0;
});

for (let i = 0; i < +qtdNomes; i++) {
    if (nomes[i]) {
        console.log(nomes[i]);
    }
}
