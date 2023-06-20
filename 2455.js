var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(' ');

[p1, c1, p2, c2] = lines;

if(p1 * c1 === p2 * c2) {
    console.log('0');
} else if(p1 * c1 < p2 * c2) {
    console.log('1');
} else {
    console.log('-1');
}