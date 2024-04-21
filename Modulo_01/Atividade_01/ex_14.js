//Fazer um algoritmo para receber números decimais até que o usuário 
//digite 0 e fazer a média aritmética desses números. 

const prompt = require('prompt-sync')();

var total = 0, acumula = 0, media;

do{
    num = parseInt(prompt("Digite valores (0 para encerrar): "), 10);
    if(num !== 0){
        acumula += num;
        total++;
    }
}while(num !== 0){
    if (total > 0){
        media = acumula / total;
        console.log(`A média aritmética é: ${media}. `);
    }else{
        console.log("error");
    }

}
