var input = require("fs").readFileSync("stdin", "utf8");

if(input.length > 10){
    console.log('palavrão')
} else {
    console.log('palavrinha')
}