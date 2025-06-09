'use strict';

function minhaFuncao(){
    console.log("Olá! Função criada em uma módulo");
}

const clientes = ['Alana Rocha', 'Clara Igreja', 'Julia Moura'];

/*CJS: CommonJS */
module.exports = { minhaFuncao, clientes };