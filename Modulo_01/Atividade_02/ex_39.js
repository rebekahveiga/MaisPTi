/* . Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */


function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const vetorA = []
const vetorB = []

for(let i = 0; i < 10; i++) {
    vetorA.push(numAleatorio(-5, 30))
}
console.log("Vetor A original: ", vetorA)

const filterArray = vetorA.filter(e => e!==null && e >= 0)

vetorB.push(filterArray)
 console.log("vetor B: ", vetorB)