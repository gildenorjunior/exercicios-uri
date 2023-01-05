var input = require("fs").readFileSync("stdin", "utf8").split('\r\n');
const tamArr = 10;

for (let i = 0; i < tamArr; i++) {
    const element = Number(input[i]);

    if (element <= 0 || element === null) {
        console.log(`X[${i}] = 1`);
    } else {
        console.log(`X[${i}] = ${element}`);
    }
}
