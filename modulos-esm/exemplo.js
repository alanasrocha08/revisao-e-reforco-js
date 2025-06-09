'use strict';

function separador(){
    console.log("\n************************");
}

/*Módulos ESM: EcmaScript Modules (sistema atual, moderno) */
function saudacao(nome){
    console.log("Olá " + nome + "!");
}

const clientes = ['Nathalya Suguiura', 'Kauê Martins', 'Vitor Alexandre']; 

// Colocando entre chaves, é para exportar um objeto
export { saudacao, clientes, separador }; 