var [t1, t2, t3, t4] = require("fs").readFileSync("stdin", "utf8").split(' ').map((item) => +item)


console.log((t1 + t2 + t3 + t4) - 3);
