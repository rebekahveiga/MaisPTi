/* Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um
funcionário e ao final escreva o conteúdo do registro. */
const prompt = require('prompt-sync')();

let funcionario = {};

funcionario.nome = prompt("Digite um nome: ");
funcionario.cargo = prompt("Digite um cargo: ");
funcionario.salario = prompt("Digite o salário: ");

console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salario: ${funcionario.salario}`);
