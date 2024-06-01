/* Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o
número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". */

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//vetor gabarito
const vetor_gabarito = []
for(let i = 0; i < 13; i++) {
    vetor_gabarito.push(numAleatorio(1, 3))
}

console.log("Gabarito: ", vetor_gabarito)

const apostadores = []
for(let i = 0; i < 100; i++) {
    const numero_cartao = numAleatorio(1000, 9999)
    const respostas = []
    for(let j = 0; j < 13; j++) {
        respostas.push(numAleatorio(1, 3))
    }
    apostadores.push({numero_cartao, respostas})
}

apostadores.forEach(apostador => {
    let acertos = 0
    for(let k = 0; k < 13; k++) {
        if(apostador.respostas[k] === vetor_gabarito[k]) {
            acertos++
        }
    }
    console.log(`Cartão ${apostador.numero_cartao} teve ${acertos} acertos.`)
    if(acertos === 13) {
        console.log("Parabéns, tu foi o GANHADOR")
    }
})