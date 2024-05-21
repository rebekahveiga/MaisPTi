/* . Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

function seq_Fibonacci(num){
    let a = 0, b = 1, f = 1;
    for(i = 2; i <= num; i ++) {
        console.log(f)
        f = a + b;
        a = b;
        b = f;
    }
}

seq_Fibonacci(11);