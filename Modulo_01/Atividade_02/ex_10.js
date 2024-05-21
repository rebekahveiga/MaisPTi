/* Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela: a) O
somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares */

const prompt = require('prompt-sync')();
let continuar = prompt("Deseja continuar? (s/n): ") || "n";
let numeros = []
let menor = Infinity
let pares = 0
let acumula = 0
let media
let somavalores = 0

do{

    let valores = parseInt(prompt("Digite valores: "));
    numeros.push({valores: valores});
    continuar = prompt("Deseja continuar? (s/n): ") || "n";
   
}

while(continuar.toLocaleLowerCase() === "s"){
    numeros.forEach(num => {
        if(num.valores < menor){
            menor = num.valores;
        }
        if(num.valores % 2 == 0) {
            pares++;
        }
        acumula ++
        somavalores+=num.valores;
        
    })
media = somavalores/acumula

console.log("menor valor: " + menor);
console.log("media valor: " + media);
console.log("qnt valores pares: " + pares);

}
