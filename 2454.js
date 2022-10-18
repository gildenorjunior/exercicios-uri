var [p, r] = require("fs").readFileSync("stdin", "utf8").split(' ');

if (p == 0) console.log("C");

if (p == 1 && r == 1) {
    console.log("A");
} else if (p == 1 && r == 0) {
    console.log("B");
}

