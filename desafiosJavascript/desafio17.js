// Escreva uma função que recebe dois parâmetros (a, b), sendo ambos do tipo Date. Retorne true se as datas forem iguais. Caso contrário, false.

const minhaFuncao = (a, b) => {
    return a.toUTCString() === b.toUTCString();
}

console.log(minhaFuncao(new Date("2022/04/06 06:30:00"), new Date("2022/04/06 06:31:00"))); //false
console.log(minhaFuncao(new Date("2022/04/06 06:30:00"), new Date("2022/04/06 06:30:00"))); //true
console.log(minhaFuncao(new Date("2021/04/06 06:30:00"), new Date("2022/04/06 06:30:00"))); //false
