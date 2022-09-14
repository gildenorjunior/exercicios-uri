var input = require("fs").readFileSync("stdin", "utf8");

let espacoEmBranco = ' ';
console.log(espacoEmBranco.repeat(7).concat('A'));
console.log(espacoEmBranco.repeat(6).concat('B B'));
console.log(espacoEmBranco.repeat(5).concat('C   C'));
console.log(espacoEmBranco.repeat(4).concat('D     D'));
console.log(espacoEmBranco.repeat(3).concat('E       E'));
console.log(espacoEmBranco.repeat(4).concat('D     D'));
console.log(espacoEmBranco.repeat(5).concat('C   C'));
console.log(espacoEmBranco.repeat(6).concat('B B'));
console.log(espacoEmBranco.repeat(7).concat('A'));