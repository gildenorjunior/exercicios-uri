var input = require("fs").readFileSync("stdin", "utf8").split("\n");

var zero = [".*", "**", ".."];
var nove = [".*", "*.", ".."];
var oito = ["*.", "**", ".."];
var sete = ["**", "**", ".."];
var seis = ["**", "*.", ".."];
var cinco = ["*.", ".*", ".."];
var quatro = ["**", ".*", ".."];
var tres = ["**", "..", ".."];
var dois = ["*.", "*.", ".."];
var um = ["*.", "..", ".."];

while (input[0] != 0) {
  var qtdCelulas = input.shift();
  var condicao = input.shift();

  if (condicao === "S") {
    var mensagemDecimal = input.shift().split("");

    for (let i = 0; i < 3; i++) {
        var cel = [];
        for (let j = 0; j < mensagemDecimal.length; j++) {
            switch (mensagemDecimal[j]) {
                case "1":
                    cel.push(um[i])
                  break;
                case "2":
                    cel.push(dois[i])
                  break;
                case "3":
                    cel.push(tres[i])
                  break;
                case "4":
                    cel.push(quatro[i])
                  break;
                case "5":
                    cel.push(cinco[i])
                  break;
                case "6":
                    cel.push(seis[i])
                  break;
                case "7":
                    cel.push(sete[i])
                  break;
                case "8":
                    cel.push(oito[i])
                  break;
                case "9":
                    cel.push(nove[i])
                  break;
                case "0":
                    cel.push(zero[i])
                  break;
              }
        }
        console.log(cel.join(' '))
        cel = [];
    }
  } else {
    var celula = [];
    mostraNaTela = [];
    elementosRemovidos = input.splice(0, 3);

    for (let i = 0; i < qtdCelulas; i++) {
        for (let j = 0; j < 3; j++) {
            var cadaCelula = elementosRemovidos[j].split(' ')[i];
            celula.push(cadaCelula);
        }
        
        switch (JSON.stringify(celula)) {
            case JSON.stringify(um):
              mostraNaTela.push(1)
              break;
            case JSON.stringify(dois):
                mostraNaTela.push(2)
              break;
            case JSON.stringify(tres):
                mostraNaTela.push(3)
              break;
            case JSON.stringify(quatro):
                mostraNaTela.push(4)
              break;
            case JSON.stringify(cinco):
                mostraNaTela.push(5)
              break;
            case JSON.stringify(seis):
                mostraNaTela.push(6)
              break;
            case JSON.stringify(sete):
                mostraNaTela.push(7)
              break;
            case JSON.stringify(oito):
                mostraNaTela.push(8)
              break;
            case JSON.stringify(nove):
                mostraNaTela.push(9)
              break;
            case JSON.stringify(zero):
                mostraNaTela.push(0)
              break;
          }
          celula = [];
    }

    console.log(mostraNaTela.join(''));
  }
}
