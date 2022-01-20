var input = require("fs").readFileSync("stdin", "utf8").split('');
var tentativa = input.shift();
var cont = 0;

for (let index = 0; index < input.length; index++) {
    const element = input[index];
    if (element == tentativa) {
        cont++;
    }
}

console.log(cont)

input.forEach((valor) => {
    if (valor === tentativa) {
        cont++;
    }
})

