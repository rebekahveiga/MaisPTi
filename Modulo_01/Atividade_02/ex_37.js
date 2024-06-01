/* Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário */

function charAleatorio() {
    const chars = 'ABCDE'; 
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

const vetorG = []

for(let i = 0; i < 20; i++) {
    vetorG.push(charAleatorio())
}

console.log("Gabarito: ", vetorG)

const vetorR = []
for(let i = 0; i < 50; i++) {
    const respostas = []
    for(let j = 0; j < 20; j++) {
        respostas.push(charAleatorio())
    }
    vetorR.push(respostas)
}

vetorR.forEach((respostas, index) => {
    let acertos = 0
    for(let k = 0; k < 20; k++) {
        if(respostas[k] === vetorG[k]) {
            acertos++
        }
    }
    console.log(`Aluno ${index + 1} teve ${acertos} acertos.`)
    if(acertos >= 12) {
        console.log("Parabéns, tu foi APROVADO")
    }else {
        console.log("REPROVADO")
    }
})