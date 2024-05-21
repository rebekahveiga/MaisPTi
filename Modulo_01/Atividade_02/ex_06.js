//. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
//tentar descobrir qual foi o valor sorteado
const prompt = require('prompt-sync')();

function randomNum() {
    var guessNum = parseInt(prompt("guess the number between 1 and 5 "));
    var compNum = Math.floor((Math.random() * 5) + 1); //max 5, min 1

    if(guessNum == compNum) {
        console.log(`Your guess is ${guessNum} and the comp num is ${compNum}, then your guess is correct!!`);
    }else if(guessNum != compNum) {
        console.log(`Your guess is ${guessNum} and the comp num is ${compNum}, then your guess is wrong!!`);
    }
}

randomNum();