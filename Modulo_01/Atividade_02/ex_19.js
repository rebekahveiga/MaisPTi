/* Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require('prompt-sync')();
let horas = []

function validaTime(horario) {
    //regex validação
    const regex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/;
    return regex.test(horario);
}

for(let i = 0; i<5; i++){
    while (true){
        let resp = prompt(console.log("Digite um horário"));
        if(validaTime(resp)) {
            
            horas.push(resp.replace(/:/g, '.'));
            break;
        }else {
            console.log("Horário inválido, tente novamente");
        }
    }

}

console.log("Horários Formatados");
horas.forEach(hora => console.log(hora));