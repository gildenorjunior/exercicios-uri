var input = require("fs").readFileSync("stdin", "utf8").split('\n');

const qtdCasosDeTeste = +input.shift();

for (let i = 0; i < qtdCasosDeTeste; i++) {
    const item = input[i].split('');
    soma = 1;

    item.forEach((letra) => {
        if(letra.toLocaleLowerCase() == 'a' ||
            letra.toLocaleLowerCase() == 'e' ||
            letra.toLocaleLowerCase() == 'i' ||
            letra.toLocaleLowerCase() == 'o' ||
            letra.toLocaleLowerCase() == 's'
        ) {
            soma *= 3;
        } else {
            soma *= 2;
        } 
    });

    console.log(soma)
}