
const prompt = require('prompt-sync')();

let cigarros_por_dia = parseInt(prompt("Insira o número de cigarros fumados por dia: "));
let anos_fumo = parseInt(prompt("Insira o número de  anos que foi fumado: "));

let total_cigarros = cigarros_por_dia * 365 * anos_fumo;
let minutos_perdidos = total_cigarros * 10;
let dias_perdidos = minutos_perdidos / 1440;

console.log("Dias de vida perdidos: ", dias_perdidos.toFixed(2));