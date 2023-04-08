var input = require("fs").readFileSync("stdin", "utf8").split("\r\n");

var n = input.shift();
var qtdLeds = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
var countLeds = 0;

for (let i = 0; i < n; i++) {
    const element = input[i].split('');

    for (let j = 0; j < element.length; j++) {
        const led = +element[j];
        countLeds += qtdLeds[led];
    }

    console.log(countLeds, 'leds');
    countLeds = 0;
}