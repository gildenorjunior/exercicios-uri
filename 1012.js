var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(' ');

var A = +lines[0];
var B = +lines[1];
var C = +lines[2];
var PI = 3.14159;

var areaTrianguloRetangulo = A * C / 2;
var areaCirculo = PI * Math.pow(C, 2);
var areaTrapezio =  ((A + B) * C) / 2;
var areaQuadrado = Math.pow(B, 2);
var areaRetangulo = A * B;

console.log("TRIANGULO: " + areaTrianguloRetangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));

// a) a área do triângulo retângulo que tem A por base e C por altura.
    // A = b.h / 2

// b) a área do círculo de raio C. (pi = 3.14159)
    // A = PI * Raio ao quadrado

// c) a área do trapézio que tem A e B por bases e C por altura.
    // A = ( B + b ) * h / 2

// d) a área do quadrado que tem lado B.
    // A = L * L

// e) a área do retângulo que tem lados A e B.
    // A = B * h
