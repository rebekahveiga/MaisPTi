/* . Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações */

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matriz = []
for(let lin = 0; lin < 50; lin++) {
    matriz[lin] = []
    for(let col = 0; col < 50; col++) {
        matriz[lin][col] = numAleatorio(10,30);
    }
}


console.log("Matriz Original:");
for (let lin = 0; lin < 50; lin ++) {
    console.log(matriz[lin].join(' '));
}



for(let lin = 0; lin < matriz.length; lin++) {
    let diagonalElement = matriz[lin][lin];
    for(let col = 0; col < matriz[lin].length; col++) {
        matriz[lin][col] *= diagonalElement;
    }
}

console.table(matriz);