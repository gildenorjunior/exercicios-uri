var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

const qtdCasosDeTestePrincipal = +input[0];
var casosDeTestePrincipal = [];

for (let i = 0; i <= qtdCasosDeTestePrincipal; i++) {
    if (input[i]) {
        casosDeTestePrincipal.push(input.shift());
    }
}

const N = casosDeTestePrincipal.shift();
const Q = input.shift();

for (let k = 0; k < +N; k++) {
    const casoTeste = casosDeTestePrincipal[k].split('');

    for (let i = 0; i < casoTeste.length; i++) {
        const letraPalavraPrincipal = casoTeste[i];
        const query = input[k].split('');

        for (let j = 0; j < query.length; j++) {
            const letraSubPalavra = query[j];
            if (letraPalavraPrincipal[i] == letraSubPalavra[i]) {
                return
            } else {
                j = 0;
            }
        }
        console.log('for de fora');

    }

}
