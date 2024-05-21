/* . Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada. */

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matriz = []
for(let lin = 0; lin < 12; lin++) {
    matriz[lin] = []
    for(let col = 0; col < 13; col++) {
        matriz[lin][col] = numAleatorio(10,30);
    }
}

console.log("Matriz Original:");
for (let lin = 0; lin < 12; lin ++) {
    console.log(matriz[lin].join(' '));
}

for(let lin = 0; lin < 12; lin++) {
    let maxElement = Math.max(...matriz[lin]);
    for(let col = 0; col < matriz[lin].length; col++) {
        matriz[lin][col] /= maxElement;
    } 
}

console.table(matriz)