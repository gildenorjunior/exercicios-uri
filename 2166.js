var input = require('fs').readFileSync('stdin', 'utf8');

let saida;
+input;

if (input == 0) {
    saida = 0;
} else if (input == 1) {
    saida = (1 / 2);
} else {
    for (let i = input; i > 0; i--) {
        if (i == input) {
            saida = (i + (1 / i));
        } else {
            saida = i + (1 / saida);
        }
    }
}

console.log(Math.floor(saida).toFixed(10));

// if n == 0:
//     saida = 1
// elif n == 1:
//     saida = 1/2
// else:
//     for i in range(n, 0, -1):
//         if i == n:
//             saida = i + 1/i
//         else:
//             saida = i + 1/saida

// print('%.10f'%saida)