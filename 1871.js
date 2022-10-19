var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

while (input[0] != '0 0') {
    const [a, b] = input[0].split(' ');
    const soma = parseInt(a) + parseInt(b);

    console.log(soma.toString().split('').filter(item => item != '0').join(''));

    input.shift();
}




