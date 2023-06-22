var input = require("fs").readFileSync("stdin", "utf8").split('\n');

const N = +input.shift();

for (let i = 0; i < N; i++) {
    const [a, b] = input[i].split(' ');
    const arr = [];
    const arrReverse = [];

    for (let i = +a; i <= +b; i++) {
        arr.push(i);
        arrReverse.push(i.toString().split('').reverse().join(''));
    }

    console.log(arr.join('').concat(arrReverse.reverse().join('')));
}