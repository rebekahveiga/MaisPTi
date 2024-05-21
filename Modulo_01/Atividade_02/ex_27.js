/* 7. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final */

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matriz = [];
let A = numAleatorio(10, 30)
let V = [];

console.log("Valor A: ", A)
for(let lin = 0; lin < 6; lin++) {
    matriz[lin] = []
    for(let col = 0; col < 6; col++) {
        matriz[lin][col] = numAleatorio(10,30);
    }
}

console.log("Matriz antes da multiplicação:");
for (let lin = 0; lin < 6; lin ++) {
    console.log(matriz[lin].join(' '));
}

for(let lin = 0; lin < 6; lin++) {
    for(let col = 0; col < 6; col++) {
        let valor = matriz[lin][col] * A;
        matriz[lin][col] = valor;
        V.push(valor);
    }
}

console.log("--------------------")
console.log("Matriz após a multiplicação:");
for (let lin = 0; lin < 6; lin ++) {
    console.log(matriz[lin].join(' '));
}

console.log("--------------------")
console.log("Vetor V:");
console.log(V.join(' '));
