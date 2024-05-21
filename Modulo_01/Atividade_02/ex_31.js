/* Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados. */

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matriz = [];
let A = numAleatorio(10, 30)
let X = [];
let contaA = 0;

console.log("Valor A: ", A)
for(let lin = 0; lin < 30; lin++) {
    matriz[lin] = []
    for(let col = 0; col < 30; col++) {
        matriz[lin][col] = numAleatorio(10,30);
    }
}

console.log("Matriz Original:");
for (let lin = 0; lin < 30; lin ++) {
    console.log(matriz[lin].join(' '));
}

for(let lin = 0; lin < 30; lin++) {
    for(let col = 0; col < 30; col++) {
        if(matriz[lin][col] === A) {
            contaA++
        }else {
           X.push(matriz[lin][col])
        }
    }
  
}

console.log("--------------------")
console.log(`Quantidades de elementos iguais a ${A} : ${contaA}`);

console.log("--------------------")
console.log(`Elementos diferentes de ${A} na matriz : `);
console.log(X.join(' '));