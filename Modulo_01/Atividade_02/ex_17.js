/* Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */
const prompt = require('prompt-sync')();

let nome = []
let idade = []

for(let i = 0; i<9; i++){
    let name = prompt(console.log("Digite um nome: "));
    let age = parseInt(prompt(console.log("Digite uma idade: ")));
    nome.push(name);
    idade.push(age);
}

for(let i = 0; i < nome.length; i++) {
    if(idade[i]< 18){
        console.log(`Nome: ${nome[i]}, Idade: ${idade[i]}`);
    }
    
}