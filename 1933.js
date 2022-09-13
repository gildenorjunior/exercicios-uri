var [a, b] = require("fs").readFileSync("stdin", "utf8").split(' ');

if (a == b) {
  console.log(+a)
} else {
  console.log(Math.max(a, b));
}