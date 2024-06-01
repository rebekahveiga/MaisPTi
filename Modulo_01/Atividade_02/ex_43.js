/* Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos. */

function newObject(obj1, obj2) {
    const novoObjeto = {...obj1, ...obj2}
    return novoObjeto
}


const obj1 = {
    nome: "Davi",
    rg: 171314,
    favfrutas : ["maçã", "uva", "melancia"],
    hobbies: ['leitura', 'caminhada'],
    amigos: ['Bob', 'Carol'],
    endereco: {
        rua: 'Rua A',
        cidade: 'São Paulo'
    }
}

const obj2 = {
    nome: "Merli",
    rg: 171315,
    favfrutas : ["laranja", "tangerina", "pera"],
    hobbies: ['games', 'cantar'],
    amigos: ['José', 'Maria'],
    endereco: {
        rua: 'Rua B',
        cidade: 'Belém'
    }
}

const completaObjeto = newObject(obj1, obj2)
console.log("Novo Objeto:", completaObjeto)

