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

/*2) Chame esta função pelo menos duas vezes passando valores diferentes e guardando os resultasdos en variáveis de escopo global. */
let resposta = calcularDiferenca(7,2);
let resposta2 = calcularDiferenca(9,3);


/*3) Apresente os resultados do console. */
let mensagem1 = "O resultado é "+resposta;
console.log(mensagem1);

let mensagem2 = "O resultado é "+resposta2; 
console.log(mensagem2);

separador();
/*Sintaxe moderna, função flecha/seta (arrow funtion)
Mesta sintaxe, a ordem de declaração IMPORTA. */
const exemplo3 = () => {
    console.log("Arrow Function");
};

exemplo3(); //Chamada deve ser feita apóa decalração

/* Quando a função tem SOMENTE UM parâmetro, podemos remover os parênteses. E QUANDO ELA FAZ somente uma única ação (ideal), podemos remover as chab=ves e dixar em uma linha. */
const saudacao = (nome) => console.log("Olá, "+nome);

saudacao("Alana");
saudacao("Clara");
saudacao("Julia");

separador();

//Com retorno EXPLÍCITO
const calcularMetadeSintaxeCompleta = (valor) => {
    return valor / 2;
}
console.log(calcularMetadeSintaxeCompleta(10)); 

//Com retorno IMPLÍCITO 
const calcularMetade = valor => valor / 2;
console.log(calcularMetade(10));

separador();

//Exercício de refatoração 
/*1) Reescreva a função do exercício anterior usando a sintaxe de arrow function */
const calcularDiferencaSintaxe = (valor1, valor2) => valor1 - valor2;

/*2) Teste fazendo novas chamadas e novas saídas */
let resultado1 = calcularDiferencaSintaxe(7, 3);
let resultado2 = calcularDiferencaSintaxe(9, 2);

let mensagem3 = "O resultado da diferença é "+resultado1;
console.log(mensagem3);
let mensagem4 = "O resultado da diferença é "+resultado2;
console.log(mensagem4);

separador();



