//Escreva um algoritmo para ler as notas das duas avaliações 
//de um aluno no semestre, calcular e escrever a média semestral 
//e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, 
//somente se o aluno foi aprovado 
//(considere 6.0 a nota mínima para aprovação). 


const prompt = require('prompt-sync')();

var nota_1, nota_2, media;

nota_1 = parseInt(prompt("Insira a nota da primeira avaliação: "), 10);
nota_2 = parseInt(prompt("Insira a nota da segunda avaliação: "), 10);

media = (nota_1 + nota_2) / 2;

if (media >= 6.0 ){
    console.log(`Aluno aprovado com media ${media}`);
}else{
    console.log(`Aluno reprovado com media ${media}`);
}