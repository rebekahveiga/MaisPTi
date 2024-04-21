//Escreva um algoritmo para ler uma quantidade indeterminada de valores 
//inteiros. Para cada valor fornecido escrever uma mensagem que indica 
//se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado 
//imediatamente após a leitura de um valor NULO ou NEGATIVO. 

const prompt = require('prompt-sync')();


const numeros = [];
let entrada, input;

//loop infinito
for(;;){
    input = prompt("Digite um número ou um valor nulor/negativo para parar: ");
    entrada = parseInt(input, 10);
    if(isNaN(entrada) || entrada < 0){
        break;
    }
    
    if(entrada %2 == 0){
        console.log("PAR. ");

    }else{
        console.log("ÍMPAR. ");
    }

}

