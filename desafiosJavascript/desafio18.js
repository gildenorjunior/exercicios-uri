// Escreva uma função que recebe duas datas como parâmetro e retorne o número de dias entre as datas

const minhaFuncao = (a, b) => {
    return Math.ceil(Math.abs(b, a) / (1000 * 60 * 60 * 24));
}

console.log(minhaFuncao(new Date("2022-04-01"), new Date("2022-04-07"))); //6
console.log(minhaFuncao(new Date("2022-12-24"), new Date("2022-04-06"))); //103