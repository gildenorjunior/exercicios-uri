var input = require('fs').readFileSync('stdin', 'utf8');

let contador = 0;
let i = 1;
let j = 7;

for (let index = 1; index <= 15; index++) {
    if(contador < 3){
        console.log(`I=${i} J=${j--}`);
        contador++;
    }

    if(contador === 3){
        contador = 0;
        i += 2;
        j = i + 6;
    }
}