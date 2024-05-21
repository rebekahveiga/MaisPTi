/* 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matriz = [];
let sumLineFour = 0, sumColTwo = 0, sumDiagPrincipal = 0, allElements = 0;

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

for(let lin = 4; lin < 5; lin++) {
    for(let col = 0; col < 5; col++) {
        sumLineFour += matriz[lin][col]
    }
}

for(let lin = 0; lin < 5; lin ++) {
    let col = 2;
    sumColTwo += matriz[lin][col]
}

for(let lin = 0; lin < 5; lin ++) {
    sumDiagPrincipal+=matriz[lin][lin]
}
    
for(let lin = 0; lin < 5; lin++) {
    for(let col = 0; col < 5; col++) {
        allElements+=matriz[lin][col]
    }
}

console.log("--------------------")
console.log("Soma elementos da linha 4:");
console.log(sumLineFour);

console.log("--------------------")
console.log("Soma elementos da coluna 2:");
console.log(sumColTwo);

console.log("--------------------")
console.log("Soma elementos da diagonal principal:");
console.log(sumDiagPrincipal);

console.log("--------------------")
console.log("Soma de todos os elementos da matriz:");
console.log(allElements);
