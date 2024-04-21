//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, 
//e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo 
//que leia o número de maçãs compradas, calcule e escreva 
//o valor total da compra. 


const prompt = require('prompt-sync')();


var maca_pg, total;

maca_pg = parseInt(prompt("Insira quantas maçãs vão ser compradas: "), 10);

if (maca_pg < 12){
    total = 0.3 * maca_pg;
}else if (maca_pg >=12){
    total = 0.25 * maca_pg;
}

console.log(`A quantidade de maçãs compradas foi de ${maca_pg}, totalizando ${total} reais`);
