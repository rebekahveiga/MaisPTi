/* Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade */

const pessoa = {
    nome: "Rebekah",
    idade: 21
}

console.log('Nome:', pessoa.nome)
console.log('Idade:', pessoa.idade)

pessoa.email = 'rebekah@veiga.com'

console.log('Email:', pessoa.email)