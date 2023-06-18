var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(' ');
[a, b] = lines;

console.log(a % b);