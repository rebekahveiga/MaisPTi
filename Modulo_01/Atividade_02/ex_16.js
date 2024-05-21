/* Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre
    0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
    depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados */

let nums = [];

for(let i = 0; i<20; i++) {
    var compNum = Math.floor((Math.random() * 99) + 0); //max 99, min 0
    nums.push(compNum);
}

console.log("Números gerados: ");
nums.forEach(n => {
    console.log(`Numero: ${n}`);
})

nums.sort((a, b) => a - b);
console.log("Números ordenados: ");
nums.forEach(n => {
    console.log(`Número: ${n}`);
})