var input = require("fs").readFileSync("stdin", "utf8");

var result = (((+input + 1) * (+input + 2)) / 2);

console.log(+result);
