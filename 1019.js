var input = require("fs").readFileSync("stdin", "utf8");

let segundos = Math.trunc(input % 60);
let varivelDeApoio = Math.trunc(input / 60);
let horas = Math.trunc(varivelDeApoio / 60);
let minutos = Math.trunc(varivelDeApoio % 60);

console.log(`${horas}:${minutos}:${segundos}`);
