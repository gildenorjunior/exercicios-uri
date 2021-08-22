var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\r\n');

let km = parseInt(lines[0]);
let litros = parseFloat(lines[1]);

let consumo = parseFloat((km / litros)).toFixed(3)

console.log(consumo, 'km/l')