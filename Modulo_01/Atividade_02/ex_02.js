const prompt = require('prompt-sync')();

let velocidade = parseFloat(prompt("Insira a velocidade do carro: "));
let multa = 0
if(velocidade > 80){
    multa = (velocidade - 80) * 5
    console.log(`Você foi multado em ${multa} reais`);
}else {
    console.log("Velocidade dentro do limite, Você não foi multado");
}