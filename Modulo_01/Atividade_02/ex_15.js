/* Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados. */

const prompt = require('prompt-sync')();
let nums = [];
let pares = [];

for(let i = 0; i< 10; i++) {
    let num = prompt(console.log("Digite um número: "));
    nums.push(num);

    if(num % 2 == 0){
        pares.push({numero: num, posicao: i});
    }
}

console.log("Números pares digitados e suas posições: ");
pares.forEach(par => {
    console.log(`Numero: ${par.numero}, Posição: ${par.posicao}`);
});

