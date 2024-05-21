/* Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente. */

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matriz = [];

for(let lin = 0; lin < 15; lin++) {
    matriz[lin] = [];
    let sum = 0;
    for(let col = 0; col < 20; col++) {
        matriz[lin][col] = numAleatorio(10, 30);
    }
}

let somaColunas = new Array(20).fill(0);

for(let col = 0; col < 20; col++) {
    for(let lin = 0; lin < 15; lin++) {
        somaColunas[col] += matriz[lin][col];
    }
}

for (let lin = 0; lin < 15; lin ++) {
    console.log(matriz[lin].join(' '));
}
console.log("--------------------")
console.log(somaColunas.join(' '));