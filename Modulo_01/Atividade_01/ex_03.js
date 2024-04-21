// Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações: 
//● Some 25 ao primeiro inteiro; 
//● Triplique o valor do segundo inteiro; 
//● Modifique o valor do terceiro inteiro para 12% do valor original; 
//● Armazene no quarto inteiro a soma dos valores originais 
//(os que o usuário digitou) dos primeiros três inteiros. 
const prompt = require('prompt-sync')();

var a, b, c, d;

a = parseInt(prompt("Introduza um número válido: "), 10);
b = parseInt(prompt("Introduza um número válido: "), 10);
c = parseInt(prompt("Introduza um número válido: "), 10);
d = parseInt(prompt("Introduza um número válido: "), 10);

new_a = a + 25;
new_b = b * 3;
new_c = c * 0.12;
new_d = a + b + c;

console.log(`Após operação de soma, ${a} ficou igual a ${new_a}.`);
console.log(`Após triplicar seu valor, ${b} ficou igual a ${new_b}.`);
console.log(`Após transformar ${c} para 12% do seu valor, ficou igual a ${new_c}.`);
console.log(`Após operação de soma dos valores ${a} + ${b} + ${c}, ${d} ficou igual a ${new_d}.`);