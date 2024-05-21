/* Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci */

function seq_Fibonacci(num){
    let a = 0, b = 1, f = 1;
    for(i = 2; i <= num; i ++) {
        console.log(f)
        f = a + b;
        a = b;
        b = f;
    }
}
    
let vetor = []

for(i = 2; i< 15; i++) {
    vetor = seq_Fibonacci(16);
}