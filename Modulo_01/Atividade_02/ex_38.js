/* Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */


function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const vetor = []
const identifica = {
    1: "soma",
    2: "produto",
    3: "media",
    4: "ordenacao",
    5: "exibe vetor"
}

for(let i = 0; i < 6; i++) {
    vetor.push(numAleatorio(1, 30))
}

console.log(vetor)

function realizarOperacao(operacao) {
    switch (operacao) {
        case 1:
            const soma = vetor.reduce((acc, val) => acc + val, 0)
            console.log("Soma dos elementos: ", soma)
            break;
        case 2:
            const produto = vetor.reduce((acc, val) => acc * val, 1)
            console.log("Produto dos elementos: ", produto)
            break;
        case 3:
            const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length
            console.log("Média dos elementos: ", media)
            break;
        case 4:
            const ordenado = [...vetor].sort((a, b) => a - b)
            console.log("Elementos em ordem crescente: ", ordenado)
            break;
        case 5:
            console.log("Vetor: ", vetor)
            break;
        default:
            console.log("Operação Inválida.")
            break;            
    }
}

const identificador = 5 // pode mudar

realizarOperacao(identificador)