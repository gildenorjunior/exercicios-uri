var input = require("fs").readFileSync("stdin", "utf8").split(" ");

[A, B, C] = input;

const arrayOrdenado = input.sort((a, b) => a - b);
[D, E, F] = arrayOrdenado;

console.log(`${D}\n${E}\n${F}\n`);

console.log(`${A}\n${B}\n${C}`);
