/* Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
 */

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matriz = [];
let SL = [], SC = [], value, valor

for(let lin = 0; lin < 5; lin++) {
    matriz[lin] = []
    for(let col = 0; col < 5; col++) {
        matriz[lin][col] = numAleatorio(10,30);
    }
}

console.log("Matriz Original:");
for (let lin = 0; lin < 5; lin ++) {
    console.log(matriz[lin].join(' '));
}

for(let lin = 0; lin < 5; lin++) {
    let somaLinha = 0;
    for(let col = 0; col < 5; col++) {
        somaLinha += matriz[lin][col];
    }
    SL.push(somaLinha)
    
}

for(let col = 0; col < 5; col++) {
    let somaColuna = 0;
    for(let lin = 0; lin < 5; lin++) {
        somaColuna += matriz[lin][col]
    }
    SC.push(somaColuna)
}


console.log("--------------------")
console.log("Soma elementos das linhas:");
console.log(SL.join(' '));

console.log("--------------------")
console.log("Soma elementos das colunas:");
console.log(SC.join(' '));