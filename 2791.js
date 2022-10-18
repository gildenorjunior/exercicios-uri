var [c1, c2, c3, c4] = require("fs").readFileSync("stdin", "utf8").split(' ');

if (c1 == 1) {
    console.log('1');
} else if (c2 == 1) {
    console.log('2');
} else if (c3 == 1) {
    console.log('3');
} else if (c4 == 1) {
    console.log('4');
}