//Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
//carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
//cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
//(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
//mostre o preço a ser pago de acordo com os dados a seguir:
//Carros populares
//- Até 100 Km percorridos: R$ 0,20 por Km
//- Acima de 100 Km percorridos: R$ 0,10 por Km
//Carros de luxo
//- Até 200 Km percorridos: R$ 0,30 por Km
//- Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require('prompt-sync')();
var car = new Object();
var value;
car["type"] = prompt("Enter the car type (popular or fancy): ");
car["days"] = parseInt(prompt("Enter the total of rent days: "));
car["km"] = parseFloat(prompt("Enter the total km : "));

if(car.type === "popular") {
    if(car.km <= 100) {
        value = (0.2 * car.km) + (car.days * 90)
        console.log(value)
    }else {
        value = (0.1 * car.km) + (car.days * 90)
        console.log(value)
    }
}else {
    if(car.km <=200) {
        value = (0.3 * car.km) + (car.days * 150)
        console.log(value)
    }else {
        value = (0.25 * car.km) + (car.days * 150)
        console.log(value)
    }
}

//console.log(car);
