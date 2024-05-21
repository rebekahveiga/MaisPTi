//Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
//Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
//R$ 0.45 para viagens mais longas

const prompt = require('prompt-sync')();
let distancia = parseFloat(prompt("Quanto de distância você deseja percorrer? "));
let dis200, dishigh
if(distancia <= 200){
    dis200 = 0.5 * distancia
    console.log(`O preço da sua passagem com ${distancia} km é de ${dis200} reais`);
}else{
    dishigh = 0.45 * distancia
    console.log(`o preço da sua passagem com ${distancia} km é de ${dishigh} reais`);
}