var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

let [arr1, arr2, arr3, arr4] = lines;
const F = +arr1[0].concat(arr2[0], arr3[0], arr4[0]);
const L = +arr1[arr1.length - 1].concat(arr2[arr2.length - 1], arr3[arr3.length - 1], arr4[arr4.length - 1]);
palavra = [];

for (let i = 1; i < arr1.length - 1; i++) {
    const M = +`${arr1[i] + arr2[i] + arr3[i] + arr4[i]}`;
    palavra.push(String.fromCharCode(((F * M) + L) % 257));
}

console.log(palavra.join(''));
