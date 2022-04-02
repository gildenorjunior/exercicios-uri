var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');

var contador = 0;
var saida = [];

while (input[0] != '0 0') {
    const [A, B] = input.shift().split(' ').map((valor) => valor);

    for (let i = 0; i < 10; i++) {
        for (let j = A; j <= B; j++) {
            var teste = j.toString().split('').filter((numero) => numero == i);
            // console.log(teste)
            contador += teste.length;

        }

        saida.push(contador);
        // console.log('__________________________');|
        contador = 0;
    }
}

console.log(saida.join(' '));

// var variable = '1';
// var expression = `/${variable}/g`;
// var re = new RegExp(expression, 'g');
// console.log(re.test('0123456'));


// console.log('0123645678'.match("/1/g"));