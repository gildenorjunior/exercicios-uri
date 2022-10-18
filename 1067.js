var [valor] = require("fs").readFileSync("stdin", "utf8").split('\r\n');

for (let i = 1; i <= valor; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}