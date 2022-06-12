// Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

// Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

// Entrada
// 7 8 9 10
// Quatro números inteiros representando a hora de início e fim do jogo.

// Saída
// O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)
// Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .

var input = require("fs").readFileSync("stdin", "utf8").split(" ");

[horaInicial, minutoInicial, horaFinal, minutofinal] = input;

var duracaoEmHoras = parseInt(horaFinal - horaInicial);
var duracaoEmMinutos = parseInt(minutofinal - minutoInicial);

//  0hr 0min -> 24hr
if (duracaoEmHoras == 0 && duracaoEmMinutos == 0) {
  duracaoEmHoras = 24;
  duracaoEmMinutos = 0;
}

if (duracaoEmHoras == 0 && duracaoEmMinutos > 0) {
  // 0hr 1min
  duracaoEmHoras = 23;
  duracaoEmMinutos = duracaoEmMinutos;
} else if (duracaoEmHoras == 0 && duracaoEmMinutos < 0) {
  // 0hr -1min -> 0hr 59min
  duracaoEmHoras = 0;
  duracaoEmMinutos = 60 - Math.abs(duracaoEmMinutos);
} else if (duracaoEmHoras > 0 && duracaoEmMinutos == 0) {
  // 1hr 0min -> 1hr 0min
  duracaoEmHoras = duracaoEmHoras;
  duracaoEmMinutos = 0;
} else if (duracaoEmHoras < 0 && duracaoEmMinutos == 0) {
  // -1hr 0min -> 23hr 0min
  duracaoEmHoras = 24 - Math.abs(duracaoEmHoras);
  duracaoEmMinutos = 0;
} else if (duracaoEmHoras > 0 && duracaoEmMinutos > 0) {
  // 1hr 1min -> 1hr 1min
  duracaoEmHoras = duracaoEmHoras;
  duracaoEmMinutos = duracaoEmMinutos;
} else if (duracaoEmHoras > 0 && duracaoEmMinutos < 0) {
  // 1hr -1min -> 1hr 59min
  duracaoEmHoras = duracaoEmHoras;
  duracaoEmMinutos = 60 - Math.abs(duracaoEmMinutos);
} else if (duracaoEmHoras < 0 && duracaoEmMinutos < 0) {
  // -1hr -1min -> 23hr 59min
  duracaoEmHoras = 24 - Math.abs(duracaoEmHoras);
  duracaoEmMinutos = 60 - Math.abs(duracaoEmMinutos);
} else if (duracaoEmHoras < 0 && duracaoEmMinutos > 0) {
  // -1hr 1min -> 23hr 1min
  duracaoEmHoras = 24 - Math.abs(duracaoEmHoras);
  duracaoEmMinutos = duracaoEmMinutos;
}

console.log(
  `O JOGO DUROU ${duracaoEmHoras} HORA(S) E ${duracaoEmMinutos} MINUTO(S)`
);
