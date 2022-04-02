var input = require("fs").readFileSync("stdin", "utf8").split('\n');

var cont = 0;

for (let i = 1; i <= 5; i++) {
    if(parseInt(input[i]) % 2 == 0){
        cont++;
    }
}

console.log(cont, 'valores pares');

