/* A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00 */

const prompt = require('prompt-sync')();
function ler_Pop(){
    let mediaSal = 0;
    let mediaFilho = 0;
    let maiorSal = 0;
    let contPessoas = 0;
    let somaSal = 0;
    let somaFilhos = 0;
    let contaSalBaixo = 0;
    let resposta = 'sim';

    while(resposta.toLocaleLowerCase() === 'sim') {
        let salario = parseFloat(prompt("Digite o salário: R$"));
        let filhos = parseInt(prompt("Digite o número de filhos: "));

        contPessoas++;
        somaSal+= salario;
        somaFilhos+= filhos;

        if(salario > maiorSal) {
            maiorSal = salario;
        }

        resposta = prompt("Deseja continuar? (sim/não) ");
    }

    if (contPessoas > 0) {
        contaSalBaixo++;
    }

    resposta = prompt("Deseja continuar? (sim/não)");


    if(contPessoas > 0) {
        mediaSal = somaFilhos / contPessoas;
        mediaFilho = somaFilhos / contPessoas;
        let percentualSalBaixo = (contaSalBaixo / contPessoas) * 100;

        console.log(`Média de salário da população: R$${mediaSal.toFixed(2)}`);
        console.log(`Média de número de filhos: ${mediaFilhos.toFixed(2)}`);
        console.log(`Maior salário encontrado: R$${maiorSal.toFixed(2)}`);
        console.log(`Percentual de pessoas com salário até R$350,00: ${percentualSalBaixo.toFixed(2)}%`);
    } else {
        console.log("Nenhuma informação foi inserida.");
    }
    }

ler_Pop();