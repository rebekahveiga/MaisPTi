/* Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M */

//função número aleatórios

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let matriz = [];
let vetorC = [];

for(let lin=0; lin<6; lin++){
    matriz[lin] = [];
    let contaNegativo = 0;
    for(let col=0; col<8; col++) {
        matriz[lin][col] = numAleatorio(-10,10);
        if(matriz[lin][col] < 0) {
            contaNegativo++;
        }
    }

    vetorC[lin] = contaNegativo;
}


for (let lin = 0; lin < 6; lin ++) {
    console.log(matriz[lin].join(' '));
}
console.log("---------------");
console.log(vetorC.join(' '));