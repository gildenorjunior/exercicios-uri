var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n').shift();

// if(input >= 0 && input <= 25){
//     console.log("Intervalo [0,25]");
// } else if(input > 25 && input <= 50) {
//     console.log("Intervalo (25,50]")
// } else if(input > 50 && input <= 75){
//     console.log("Intervalo (50,75]");
// } else if(input > 75 && input <= 100){
//     console.log("Intervalo (75,100]");
// } else {
//     console.log("Fora de intervalo")
// }

switch (true) {
    case (lines >= 0 && lines <= 25):
        console.log("Intervalo [0,25]");
        break;
    case (lines > 25 && lines <= 50):
        console.log("Intervalo (25,50]")
        break;
    case (lines > 50 && lines <= 75):
        console.log("Intervalo (50,75]");
        break;
    case (lines > 75 && lines <= 100):
        console.log("Intervalo (75,100]");
        break;
    default:
        console.log("Fora de intervalo");
}