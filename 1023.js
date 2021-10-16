var input = require("fs").readFileSync("stdin", "utf8").split(" ").map(valor => parseFloat(valor));

var a = input[0];
var b = input[1];
var c = input[2];

delta = (Math.pow(b, 2) - (4 * a * c));

if(delta < 0 || (2 * a) == 0){
    console.log("Impossivel calcular");
} else {
    r1 = (((-b) + (Math.sqrt(delta))) / (2 * a)).toFixed(5);
    r2 = (((-b) - (Math.sqrt(delta))) / (2 * a)).toFixed(5);
    console.log("R1 = ", r1);
    console.log("R2 = ", r2);
}
