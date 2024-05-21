/* Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal */


function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matriz = []
let sumAD = 0, sumABD= 0

for(let lin = 0; lin < 10; lin++) {
    matriz[lin] = []
    for(let col = 0; col < 10; col++) {
        matriz[lin][col] = numAleatorio(10,30);
    }
}

console.log("Matriz Original:");
for (let lin = 0; lin < 10; lin ++) {
    console.log(matriz[lin].join(' '));
}


for(let lin = 0; lin < 10; lin++) {
    for(let col = lin + 1; col < matriz[lin].length; col++) {
        sumAD += matriz[lin][col]
    }
}

for(let lin = 1; lin < 10; lin++) {
    for(let col = 0; col < lin; col++) {
        sumABD += matriz[lin][col];
    }
}

console.log("Soma valores acima da diagonal principal", sumAD)
console.log("Soma valores abaixo da diagonal principal", sumABD)