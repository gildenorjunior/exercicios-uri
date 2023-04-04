var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var n = input.shift();
var [a, b] = input[0].split(' ');

if (+a + +b > +n) {
    console.log('Deixa para amanha!')
} else {
    console.log('Farei hoje!')
}