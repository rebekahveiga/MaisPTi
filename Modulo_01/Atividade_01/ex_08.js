//Escreva um algoritmo para ler 2 valores 
//(considere que não serão lidos valores iguais) e escreve-los 
//em ordem crescente. 

const prompt = require('prompt-sync')();

var a, b;

a = parseInt(prompt("Insira um valor: "));
b = parseInt(prompt("Insira um valor: "));

if (a > b){
    console.log(`b = ${b} --> a = ${a}`);
}else{
    console.log(`a = ${a} --> b = ${b}`);
}