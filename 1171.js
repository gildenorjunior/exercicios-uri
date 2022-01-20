'use strict';

var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

input.shift();

var novaArr = input.filter(function(este, i) {
    return input.indexOf(este) === i;
});

// console.log(novaArr)
// console.log(input)

for (let i = 0; i < novaArr.length; i++) {
    var novaArrVar = novaArr[i];

    for (let j = 0; j < input.length; j++) {
        var inputVar = input[j];

        if(novaArrVar === inputVar){
            console.log(`${novaArrVar} é igual a ${inputVar}`);
        }
        
    }
}

// 4 aparece 1 vez(es)
// 8 aparece 2 vez(es)
// 10 aparece 3 vez(es)
// 260 aparece 1 vez(es)