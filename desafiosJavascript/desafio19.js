//Escreva uma função que recebe dois paramêtros (a, b), onde 'a' é um Date e 'b' é um number.

// Adicione dias na data 'a', de acordo com o núemro passado em 'b'. Retorne a nova data.

const minhaFuncao = (a, b) => new Date(a.setDate(a.getDate() + b));

console.log(minhaFuncao(new Date('2022-04-05'), 6)); //2022-04-11-11T00:00:00.000Z
console.log(minhaFuncao(new Date('2021-12-24'), 109)); //2022-04-12-11T00:00:00.000Z
console.log(minhaFuncao(new Date('2022-04-11'), -10)); //2022-04-01-11T00:00:00.000Z