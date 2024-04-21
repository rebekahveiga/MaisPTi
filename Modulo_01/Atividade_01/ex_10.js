//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. 

const prompt = require('prompt-sync')();

var n;

n = parseInt(prompt("Escreva um número inteiro: "), 10);

for(i = 0; i<10; i++){
    console.log(n);
}