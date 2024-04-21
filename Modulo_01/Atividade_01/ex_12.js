// Escreva um algoritmo que gere os números de 1000 a 1999 e 
//escreva aqueles que, divididos por 11, dão resto igual a 5. 

const prompt = require('prompt-sync')();

for (let n = 1000; n < 1999; n++) {
    if(n %11 == 5){
        console.log(`seq: ${n}.`);
    }
}