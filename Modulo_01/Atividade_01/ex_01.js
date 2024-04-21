//  Escreva um algoritmo para ler uma temperatura em graus Celsius, 
//  calcular e escrever o valor correspondente em graus Fahrenheit. 

const prompt = require('prompt-sync')();

var temp_C = prompt("Digite uma temperatura em Graus Celsius: ");

var temp_F =  1.8 * temp_C + 32;

console.log(`${temp_C} graus Celsius é equivalente a ${temp_F} graus Fahrenheit. `);
