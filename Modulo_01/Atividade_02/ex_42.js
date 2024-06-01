/* Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */


function filtroObjeto(objeto) {
    const novoObjeto = {}

    for(const prop in objeto) {
        if(Array.isArray(objeto[prop])) {
            novoObjeto[prop] = objeto[prop]
        }
    }
    return novoObjeto
}


const dados = {
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

const novoObjtArrays = filtroObjeto(dados)
console.log("Novo Objeto com Arrays:", novoObjtArrays)