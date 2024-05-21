// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')();

function startGame(){
    var chooseOne = parseInt(prompt("Choose one option: 1 -> Rock, 2 -> Paper, 3 -> Scissor "));
    console.log(" ");
    var compAnswer = Math.floor((Math.random() * 3) + 1); //max 3, min 1
    console.log("Comp choose: ",compAnswer);
    if(chooseOne == 1) { //if you choose rock
        if(compAnswer == 1) {
            console.log("It's a Tie!");
        }
        if(compAnswer == 2) {
            console.log("Comp Wins, You Lost!");
        }
        if(compAnswer == 3) {
            console.log("You Won!");
        }
    }
    if(chooseOne == 2) { //you choose paper
        if(compAnswer == 1) { 
            console.log("You won!");
        }
        if(compAnswer == 2) {
            console.log("It's a tie!");
        }
        if(compAnswer == 3) {
            console.log("You Lost");
        }
    }
    if(chooseOne == 3) { //you choose scissor
        if(compAnswer == 1) { 
            console.log("You Lost!");
        }
        if(compAnswer == 2) {
            console.log("You won!");
        }
        if(compAnswer == 3) {
            console.log("It's a tie");
        }
    }
}

startGame();

