'use strict';

function minhaFuncao(){
    console.log("Olá! Função criada em um módulo");
}

const clientes = ['Alana Rocha', 'Clara Igreja', 'Julia Moura'];

/*CJS: CommonJS */
module.exports = { minhaFuncao, clientes };