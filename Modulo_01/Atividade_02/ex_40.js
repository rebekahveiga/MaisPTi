/* Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.) */

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//vetor resultado/gabarito
const gabarito = []
for(let i = 0; i < 5; i++) {
    gabarito.push(numAleatorio(1, 5))
}

console.log("Resultado: ", gabarito)

const conjuntos = []

for(let i = 0; i < 50; i++) {
    const vetor = []
    for(let j = 0; j < 5; j++) {
        const elemento = numAleatorio(1, 5)
        vetor.push(elemento)
    }
    conjuntos.push(vetor)
}

conjuntos.forEach((e, index) => {
    let ganhou = true
    for(let k = 0; k < 5; k++) {
        if(e[k] !== gabarito[k]) {
            ganhou = false
            break
        }
    }
    if(ganhou) {
        console.log(`Conjunto ${index + 1}: Ganhador!!`, e)
    }else {
        console.log(`Conjunto ${index + 1}: Você Perdeu!!`, e)
    }
})