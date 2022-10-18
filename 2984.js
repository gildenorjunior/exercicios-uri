var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

pautasAbertas = 0;
pautasFechadas = 0;

input[0].split('').forEach((pauta) => {
    if (pauta == '(') {
        pautasAbertas += 1;
    } else if (pauta == ')') {
        if (pautasAbertas != 0) {
            pautasAbertas -= 1;
        }
    }
});

if (pautasAbertas > 0) {
    console.log(`Ainda temos ${pautasAbertas} assunto(s) pendente(s)!`);
} else {
    console.log('Partiu RU!');
}