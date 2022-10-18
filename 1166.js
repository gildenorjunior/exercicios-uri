var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\r\n');

var qtdCasos = lines.shift();

for (let i = 0; i < qtdCasos; i++) {
    switch (+lines[i]) {
        case 1: 
            console.log(1)
            break;
        case 2: 
            console.log(3)
            break;
        case 3: 
            console.log(7)
            break;
        case 4: 
            console.log(11)
            break;
        case 5: 
            console.log(17)
            break;
        case 6: 
            console.log(23)
            break;
        case 7: 
            console.log(31)
            break;
        case 8: 
            console.log(39)
            break;
        case 9: 
            console.log(49)
            break;
        case 10: 
            console.log(59)
            break;
        case 11: 
            console.log(71)
            break;
        case 12: 
            console.log(83)
            break;
        case 13: 
            console.log(97)
            break;
        case 14: 
            console.log(111)
            break;
        case 15: 
            console.log(127)
            break;
        case 16: 
            console.log(143)
            break;
        case 17: 
            console.log(161)
            break;
        case 18: 
            console.log(179)
            break;
        case 19: 
            console.log(199)
            break;
        case 20: 
            console.log(219)
            break;
        case 21: 
            console.log(241)
            break;
        case 22: 
            console.log(263)
            break;
        case 23: 
            console.log(287)
            break;
        case 24: 
            console.log(311)
            break;
        case 25: 
            console.log(337)
            break;
        case 26: 
            console.log(363)
            break;
        case 27: 
            console.log(391)
            break;
        case 28: 
            console.log(419)
            break;
        case 29: 
            console.log(449)
            break;
        case 30: 
            console.log(479)
            break;
        case 31: 
            console.log(511)
            break;
        case 32: 
            console.log(543)
            break;
        case 33: 
            console.log(577)
            break;
        case 34: 
            console.log(611)
            break;
        case 35: 
            console.log(647)
            break;
        case 36: 
            console.log(683)
            break;
        case 37: 
            console.log(721)
            break;
        case 38: 
            console.log(759)
            break;
        case 39: 
            console.log(799)
            break;
        case 40: 
            console.log(839)
            break;
        case 41: 
            console.log(881)
            break;
        case 42: 
            console.log(923)
            break;
        case 43: 
            console.log(967)
            break;
        case 44: 
            console.log(1011)
            break;
        case 45: 
            console.log(1057)
            break;
        case 46: 
            console.log(1103)
            break;
        case 47: 
            console.log(1151)
            break;
        case 48: 
            console.log(1199)
            break;
        case 49: 
            console.log(1249)
            break;
        case 50: 
            console.log(1299)
            break;
        default:
            console.log(-1);
            break;
    }
}

// var criarArrays = (n) => {
//     var arrays = [];
//     for (var i = 0; i < n; i++) {
//         arrays[i] = [];
//     }
//     return arrays;
// };

// for (let i = 0; i < qtdCasos; i++) {
//     var qtdVaretas = +lines[i];

//     var varetas = criarArrays(qtdVaretas);

//     for (let j = 0; j < varetas.length; j++) {
//         var varetaAtual = varetas[j];

        

//     }
//     console.log();
// }