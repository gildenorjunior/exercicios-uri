'use strict';

var input = require("fs").readFileSync("stdin", "utf8").split(' ');

let codigo = parseInt(input.shift());
let quantidade = input.shift();

const valores = [4.00, 4.50, 5.00, 2.00, 1.50]; 

console.log("Total: R$ " + parseFloat(valores[codigo - 1] * quantidade).toFixed(2));