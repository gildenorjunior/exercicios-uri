var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');


while (input.length > 1) {
    var [nCasos, alturaMin, alturaMax] = input.shift().split(' ');
    var count = 0;
    for (let i = 0; i < nCasos; i++) {
        const element = input.shift();
        if (+element >= alturaMin && +element <= alturaMax) {
            count += 1;
        }
    }
    console.log(count)
}
