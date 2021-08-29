var input = require("fs").readFileSync("stdin", "utf8");

let ano = 365;
let mes = 30;

let qtdAnos = parseInt(input / ano);
let restoDaDivisaoPorAnos = input % ano;
let qtdMes = parseInt(restoDaDivisaoPorAnos / mes);
let qtdDias = parseInt(restoDaDivisaoPorAnos % mes);

let resultado = `${qtdAnos} ano(s)
${qtdMes} mes(es)
${qtdDias} dia(s)`

console.log(resultado);
