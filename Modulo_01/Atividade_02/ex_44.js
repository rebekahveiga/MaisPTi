/* Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
 */


function contaString(objeto) {
    let contaStr = 0
    for(const prop in objeto) {
        if(typeof objeto[prop] === 'string') {
            contaStr++
        }
    }
    return contaStr
}

const dados = {
    nome: "Davi",
    rg: 171314,
    nomecachorro: "José Carlos",
    escola: "Equipe",
    favfrutas : ["maçã", "uva", "melancia"],
    hobbies: ['leitura', 'caminhada'],
    amigos: ['Bob', 'Carol'],
    endereco: {
        rua: 'Rua A',
        cidade: 'São Paulo'
    }
}

const contaS = contaString(dados)
console.log("Quantidade: ", contaS)