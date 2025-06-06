'use strict';

/*Sintaxe tradicional, função nomeada
A ordem de declaração da função neste caso NÃO IMPORTA*/
function exemplo1(){
    console.log("Função nomeada");
}

exemplo1(); //chamada da função

function separador(){
    console.log("\n************************");
}

separador();

 /*Sintaxe tradicional, função anônima
 Nesta sintaxe, a ordem IMPORTA. */

 const exemplo2 = function(){
    console.log("Função anônima");
 }

exemplo2(); //chamada (sempre apó declarar a função)

separador();

//Mini exercícios:
/*1) Crie uma função (qualqier sintaxe) que receba dois valores numéricos como parâmetro, calcule a diferença entre estes vslores e retorne o resultado calculado.*/
function calcularDiferenca(valor1, valor2){
    return valor1 - valor2;
}

separador();

/*2) Chame esta função pelo menos duas vezes passando valores diferentes e guardando os resultasdos en variáveis de escopo global. */
let resposta = calcularDiferenca(7,2);
let resposta2 = calcularDiferenca(9,3);


/*3) Apresente os resultados do console. */
let mensagem1 = "O resultado é "+resposta;
console.log(mensagem1);

let mensagem2 = "O resultado é "+resposta2; 
console.log(mensagem2);


