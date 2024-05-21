/* Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS). */
const prompt = require('prompt-sync')();


let funcionarios =  [];

for(i=0; i<3; i++){
    let funcionario = {};
    funcionario.matricula = prompt("Digite a matricula: ");
    funcionario.nome = prompt("Digite um nome: ");
    funcionario.salbruto = parseFloat(prompt("Digite o salario bruto: "));
    funcionario.inss = funcionario.salbruto * 0.12;
    funcionario.saliq = funcionario.salbruto - funcionario.inss;

    funcionarios.push(funcionario);
}

for(let i = 0; i < funcionarios.length; i++) {
    console.log(`
        Matricula: ${funcionarios[i].matricula}, 
        nome: ${funcionarios[i].nome}, 
        Salario Bruto: ${funcionarios[i].salbruto.toFixed(2)},
        Dedução Inss: ${funcionarios[i].inss.toFixed(2)},
        Salario Liquido: ${funcionarios[i].saliq.toFixed(2)} 
    `);
}