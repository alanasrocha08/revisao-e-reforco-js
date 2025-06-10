'use strict';

/* Sobre  operador rest...
Usamos o rest para mesclar uma relação de parâmetros/ argumentos para uma função. Na prática, od parâmetros se comportam com um array podendo receber interações via loop. */
function somar(...valores){
    // Variável acumuadora
    let total = 0;

    // Interação para somar e guardar o total
    for(const valor of valores){
        total += valor;
    }

    return total;
}
let valores1 = [10,20];
let valores2 = [10,20,30];
let valores3 = [10,20,30,40];


let resultado1 = somar(10,20);
let resultado2 = somar(10,20,30); 
console.log(resultado1);
console.log(resultado2);


