var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

const qtdCasosTeste = input.shift();

for (let i = 0; i < qtdCasosTeste; i++) {
    var [h, m, o] = input[i].split(' ');

    if (o == 1) {
        if (h.length == 1) {
            h = '0' + h
        }

        if (m.length == 1) {
            m = '0' + m
        }

        console.log(`${h}:${m} - A porta abriu!`);
    } else if (o == 0) {
        if (h.length == 1) {
            h = '0' + h
        }

        if (m.length == 1) {
            m = '0' + m
        }
        console.log(`${h}:${m} - A porta fechou!`);
    }
}