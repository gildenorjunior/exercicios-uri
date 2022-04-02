var input = require("fs").readFileSync("stdin", "utf8").split('\n');

var cont = 0;

input.forEach((linha) => {
    if(+linha > 0){
        cont++;
    }
})

console.log(cont, 'valores positivos');

