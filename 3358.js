var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

let qtdCasosTeste = +input.shift();

for (let i = 0; i < qtdCasosTeste; i++) {
    let sobrenome = input[i];
    let contador = 0;

    for (let j = 0; j < sobrenome.length; j++) {
        let letraAtual = sobrenome[j].toLocaleLowerCase();

        let vogal_a = letraAtual === 'a';
        let vogal_e = letraAtual === 'e';
        let vogal_i = letraAtual === 'i';
        let vogal_o = letraAtual === 'o';
        let vogal_u = letraAtual === 'u';

        (vogal_a || vogal_e || vogal_i || vogal_o || vogal_u) ? contador = 0 : contador += 1;

        if (contador === 3) break
    }
    contador >= 3 ? console.log(sobrenome, 'nao eh facil') : console.log(sobrenome, 'eh facil');
}