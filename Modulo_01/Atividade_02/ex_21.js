/* Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */
const prompt = require('prompt-sync')();

function peso(alt, sexo){
    if(sexo == "f"){
        let ideal = (62.1 * alt) - 44.7
        console.log(`Seu peso ideal é ${ideal.toFixed(2)} kg.`);
    }else{
        let ideal = (72.7 * alt) - 58
        console.log(`Seu peso ideal é ${ideal.toFixed(2)} kg.`);
    }
}

sexo = prompt(console.log("digite seu sexo:\n f - feminino. \n m- masculino. "));
altura = parseFloat(prompt(console.log("digite sua altura (em m). ")));

peso(altura, sexo);