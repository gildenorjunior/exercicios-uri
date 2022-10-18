var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

for (const item of input) {
    var [a, b] = item.split(' ');
    if (a == 0 && b == 0) {
        break;
    }
    console.log(a * b);
}