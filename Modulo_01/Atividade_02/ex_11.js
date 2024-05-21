/* Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência.
     */

const prompt = require('prompt-sync')();

function reading_Pa(a, r, n) {
    let sum = 0;
    console.log(`O primeiro elemento é ${a} e a razão é ${r}.`);
    for(let i=0; i<n; i++){
        console.log(`elemento ${i+1} = ${a}`);
        sum+= a;
        a+= r;
    }
    console.log(`A soma de todos elementos é igual ${sum}.`);
    console.log(`O último elemento é ${a - r}.`);
}



let a = parseInt(prompt("Digite o primeiro termo da PA: "));
let r = parseInt(prompt("Digite a razão da PA: "));
reading_Pa(a, r, 10);