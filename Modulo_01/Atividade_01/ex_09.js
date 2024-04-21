//Escreva um algoritmo que leia o código de origem de um produto 
//e imprima a região do mesmo, conforme a tabela abaixo.

const prompt = require('prompt-sync')();

var code;

code = parseInt(prompt("Insira o código de acordo com a tabela: "));

switch(true) {
    case (code == 1):
        console.log("1 --> Sul");
        break;
    case (code == 2):
        console.log("2 --> Norte");
        break;
    case (code == 3):
        console.log("3 --> Leste");
        break;
    case (code == 4):
        console.log("4 --> Oeste");
        break;
    case (code >=5 && code < 7):
        console.log("5-6 --> Nordeste");
        break;
    case (code >=7 && code < 10):
        console.log("7-9 --> Sudeste");
        break;
    case (code >=10 && code < 21):
        console.log("10-20 --> Centro-Oeste");
        break;
    case (code >=25 && code < 51):
        console.log("25-50 --> Noroeste");
        break;
    default:
        console.log("Fora de Intervalos - Produto Importado");
        break;
}