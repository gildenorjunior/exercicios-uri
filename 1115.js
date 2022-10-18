var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

for (let i = 0; i < input.length; i++) {
    var [x, y] = input[i].split(' ');
    parseInt(x);
    parseInt(y);

    if (x == 0 || y == 0) {
        break;
    }

    if (x > 0 && y > 0) {
        console.log('primeiro');
    } else if (x < 0 && y > 0) {
        console.log('segundo');
    } else if (x < 0 && y < 0) {
        console.log('terceiro');
    } else if (x > 0 && y < 0) {
        console.log('quarto');
    }
}

