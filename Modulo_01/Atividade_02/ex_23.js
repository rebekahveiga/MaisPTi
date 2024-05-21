/* Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
principal são iguais a 1 e os demais são nulos. */

const size = 7;

let identityMatrix = [];

for (let i = 0; i < size; i++) {
    identityMatrix[i] = [];
    for(let j = 0; j < size; j++) {
        if (i === j) {
            identityMatrix[i][j] = 1;
        } else {
            identityMatrix[i][j] = 0;
        }
    }
}

for (let i = 0; i < size; i++) {
    console.log(identityMatrix[i].join(" "));
}