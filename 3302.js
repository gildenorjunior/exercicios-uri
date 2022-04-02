var input = require("fs").readFileSync("stdin", "utf8").split('\n')
var n1 = input.shift();

for (let i = 0; i < n1; i++) {
    console.log(`resposta ${i + 1}: ${input[i]}`);
}
