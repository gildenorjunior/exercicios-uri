var input = require("fs").readFileSync("stdin", "utf8");

if(input == 1) {
    console.log('Top 1')
} else if(input > 1 && input <= 3) {
    console.log('Top 3')
} else if(input > 3 && input <= 5) {
    console.log('Top 5')
} else if(input > 5 && input <= 10) {
    console.log('Top 10')
} else if(input > 10 && input <= 25) {
    console.log('Top 25')
} else if(input > 25 && input <= 50) {
    console.log('Top 50')
} else if(input > 50 && input <= 100) {
    console.log('Top 100')
}

// 1, 3, 5, 10, 25, 50 e 100.