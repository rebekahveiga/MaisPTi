/* Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias */

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

values = []
vetor_par = []
vetor_impar = []

for(let i = 0; i < 30; i++) {
    values = numAleatorio(10,30)
    console.log(`Num Aleatorio ${i}: `, values)
    if(values % 2 == 0) {
        vetor_par.push(values)
        if(vetor_par.length === 5) {
            console.log(`Vetor Par cheio: `, vetor_par)
            vetor_par = []
        }
    }else {
        vetor_impar.push(values)
        if(vetor_impar.length === 5) {
            console.log(`Vetor Impar cheio: `, vetor_impar)
            vetor_impar = []
    }
  }
}

if(vetor_par.length > 0) {
    console.log(`Restantes do Vetor Par: `, vetor_par)
}

if(vetor_impar.length > 0) {
    console.log(`Restantes do Vetor Impar: `, vetor_impar)
}
