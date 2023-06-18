var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

let [primeiraNota, media] = lines;

console.log((media * 2) - primeiraNota);
