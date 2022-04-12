var input = require("fs").readFileSync("stdin", "utf8").split("\r\n");

var out = "";
var max;
var i = 0;
var N = 0;
var idJogo;

while (input.length > N) {
  let dados = input[i].split(" ");
  N = +dados[0] + N;
  idJogo = dados[1];
  max = 0;

  for (i; i <= N; i++) {
    dados = input[i].split(" ");
    if (dados[0] == idJogo && dados[1] == "0") {
      max++;
    }
  }

  out = out.concat(max).concat("\n");
  N = i;
}

console.log(out.substring(0, out.length - 3));
