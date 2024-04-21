// Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! 
//Estude mais’ caso a média calculada seja menor que 6,0 

const prompt = require('prompt-sync')();


var nota_1, nota_2, media;

nota_1 = parseInt(prompt("Insira a nota da primeira avaliação: "), 10);
nota_2 = parseInt(prompt("Insira a nota da segunda avaliação: "), 10);

media = (nota_1 + nota_2) / 2;

if (media >= 6.0 ){
    console.log(`Aluno aprovado com media ${media}`);
}else{
    console.log(`Você foi REPROVADO! Estude mais.`);
}