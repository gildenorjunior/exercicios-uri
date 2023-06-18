var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(' ');

[nCompetidores, qtdPapelComprado, qtdPapel] = lines;

console.log((qtdPapelComprado / nCompetidores) >= qtdPapel ? 'S' : 'N');
