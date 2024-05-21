/* Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos
da diagonal principal com a média dos elementos da diagonal secundária. */

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matriz = []
for(let lin = 0; lin < 3; lin++) {
    matriz[lin] = []
    for(let col = 0; col < 3; col++) {
        matriz[lin][col] = numAleatorio(10,30);
    }
}


console.log("Matriz Original:");
for (let lin = 0; lin < 3; lin ++) {
    console.log(matriz[lin].join(' '));
}

function calcularMediaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let lin = 0; lin < matriz.length; lin++) {
        soma += matriz[lin][matriz.length - 1 - lin];
    }
    return soma / matriz.length;
}

function multiplicarDiagonalPrincipal(matriz, mediaDiagonalSecundaria) {
    for (let lin = 0; lin < matriz.length; lin++) {
        matriz[lin][lin] *= mediaDiagonalSecundaria;
    }
}


let mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matriz)
multiplicarDiagonalPrincipal(matriz, mediaDiagonalSecundaria )

console.table(matriz);