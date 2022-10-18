var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\r\n');

while (lines.length > 0) {
    let linha = lines.shift();
    var [t, v] = linha.split(' ');

    if (t && v) {
        parseInt(t);
        parseInt(v);
        if ((t * v) * 2 == -0) {
            console.log(0);
        } else {
            console.log((t * v) * 2);
        }
    }
}

// for (let i = 0; i < input.length; i++) {
//     var [t, v] = input[i].split(' ');
//     console.log((t * v));
// }