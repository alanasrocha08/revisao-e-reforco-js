'use strict';

function minhaFuncao(){
    console.log("Olá! Função criada em uma módulo");
}

const clientes = ['Alana Rocha', 'Clara Igrja', 'Julia Moura'];

/*CJS: CommonJS */
module.exports = { minhaFuncao, clientes };