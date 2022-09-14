var input = require("fs").readFileSync("stdin", "utf8");

if (input == 0) {
    console.log('E');
} else if (input >= 1 && input <= 35) {
    console.log('D');
} else if (input >= 36 && input <= 60) {
    console.log('C');
} else if (input >= 61 && input <= 85) {
    console.log('B');
} else if (input >= 86 && input <= 100) {
    console.log('A');
}
