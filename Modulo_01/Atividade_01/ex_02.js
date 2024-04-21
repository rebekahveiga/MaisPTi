// Escreva um algoritmo para ler o número de eleitores de um município, 
// o número de votos brancos, nulos e válidos. Calcular e escrever o 
// percentual que cada um representa em relação ao total de eleitores

const prompt = require('prompt-sync')();

var qtd_E = prompt("Insira a quantidade de Eleitores: ");
var qtd_VB = prompt("Insira a quantidade de Votos Brancos: ");
var qtd_VN = prompt("Insira a quantidade de Votos Nulos: ");
var qtd_VV = prompt("Insira a quantidade de Votos Válidos: ");

var p_VB = (qtd_VB)/(qtd_E) * 100; 
var p_VN = (qtd_VN)/(qtd_E) * 100; 
var p_VV = (qtd_VV)/(qtd_E) * 100;

console.log(`${p_VB} é o percentual de votos brancos.`);
console.log(`${p_VN} é o percentual de votos nulos.`);
console.log(`${p_VV} é o percentual de votos válidos.`);