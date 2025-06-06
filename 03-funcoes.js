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

/* */
