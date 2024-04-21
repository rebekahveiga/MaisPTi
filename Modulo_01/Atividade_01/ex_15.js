//Fazer um algoritmos para receber um número decimal e o peso de cada 
//número até que o usuário digite o número 0. Fazer a média ponderada 
//desses números e pesos respectivos.

const prompt = require('prompt-sync')();

var num, peso, num_peso = 0, acumula = 0, media;

do{
    num = parseFloat(prompt("Digite valores (0 para encerrar): "));
    if(num !== 0){
        peso = parseInt(prompt("Digite valor do peso: "), 10);
        num_peso += num * peso;
        acumula += peso;
    }
}while(num !== 0){
    if (acumula > 0){
        media = num_peso / acumula;
        console.log(`A média ponderada é: ${media.toFixed(2)}. `);
    }else{
        console.log("error");
    }

}
