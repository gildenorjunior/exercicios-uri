var input = require("fs").readFileSync("stdin", "utf8").split(" ").map(numero => parseInt(numero));

var A = input[0];
var B = input[1];
var C = input[2];
var D = input[3];

if((B > C) && (D > A) && ((C + D) > (A + B)) && (C > 0) && (D > 0) && ((A % 2) === 0)){
    console.log("Valores aceitos");
} else {
    console.log("Valores não aceitos");
}