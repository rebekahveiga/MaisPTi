// Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
//comprimentos e diga se é possível formar um triângulo com essas retas.
//Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
//lado deve ser menor que a soma dos outros dois

const prompt = require('prompt-sync')();
let seg1 = parseFloat(prompt("Digite o comprimento do segmento 1: "));
let seg2 = parseFloat(prompt("Digite o comprimento do segmento 2: "));
let seg3 = parseFloat(prompt("Digite o comprimento do segmento 3: "));

if (seg1 < seg2 + seg3 && seg2 < seg1 + seg3 && seg3 < seg1 + seg2 ){
    console.log("É um triângulo");
}else{
    console.log("Não é um triângulo");
}

