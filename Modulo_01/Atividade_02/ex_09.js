//Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
//mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
//perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
//funcionário.

const prompt = require('prompt-sync')();
let funcionarios = []
let continuar = prompt("Deseja continuar? (s/n): ") || "n";

while (continuar.toLocaleLowerCase() === "s") {
    let salario = prompt(console.log("Digite o salário do funcionário: "));
    let sexo = prompt(console.log("Digite o sexo do funcionário: "));

    funcionarios.push({
        salario: parseFloat(salario), sexo: sexo});
        continuar = prompt("Deseja continuar? (s/n): ") || "n";
}

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

funcionarios.forEach(funcionario => {
    if(funcionario.sexo.toLocaleLowerCase() === "m"){
        totalSalarioHomens+= funcionario.salario;
    }
    else if (funcionario.sexo.toLocaleLowerCase() === "f"){
        totalSalarioMulheres+= funcionario.salario;
    }
});

console.log("Total de salário pago aos homens: " + totalSalarioHomens);
console.log("Total de salário pago às mulheres: " + totalSalarioMulheres);