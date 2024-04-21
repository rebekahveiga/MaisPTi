//Escreva um algoritmo para imprimir os 50 primeiros número primos
// maior que 100. Obs.: Número primo é aquele divisível somente 
//por 1 e ele mesmo.


let count = 0, num = 101;

while(count < 50){
    let numPrimo = true; // Presumimos que o número é primo até provar o contrário
    let divisor = 2;

    if (num % 2 == 0 && num > 2) {
        numPrimo = false;
    }else {
        // Testa divisores ímpares até a raiz quadrada do número
        divisor = 3;
        do{
            if(num % divisor === 0){
                numPrimo = false;
                break;
            }
            divisor +=2;
        } while (divisor * divisor <= num);
    }

    if (numPrimo) {
        console.log(num);
        count++;
    }
    num++;
}