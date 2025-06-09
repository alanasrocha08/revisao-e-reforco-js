'use strict';

// Importação de recurso padrão (default)
import alunos from './modulos-esm/alunos.js';

//Importação de múltiplos recursos/módulos usando ESM
import { saudacao, clientes, separador } from './modulos-esm/exemplo.js';

//Uso de um 'apelido/alias' para evitar conflito de nomes
import { pessoa, livro, alunos as personagens } from './modulos-esm/dados.js';

saudacao("Nathalya Suguiura");
console.log(clientes);

separador();

//Acessando o recurso do import de alunos
console.log(alunos[1]);
console.log(alunos);

for(const aluno of alunos){
    console.log(aluno);
}

separador();

//Acessando modulo 'dados'
console.log(pessoa.nome);
console.log(livro);
console.log(personagens); // Lembre-se: personagens é um apleido para alunos 

separador();

/*Exercícios 

1) Crie um arquivo chmado "funcoes.js" dentro da pasta "modulos-esm"

2) Dentro dele, programe 3 funções: 
    - Converter caracteres para MAIÚCULO
    - Converter caracteres para MINÚSCULO
    - Formatar valor em moeda brasileira (real) 
    
3) Exporte-as como módulos 

4) No arquivo 05, importe e utilize estas funções passando textor e valores para testes.*/

import { converterMaiusculo, converterMinusculo, moeda } from './modulos-esm/funcoes.js';
console.log(converterMaiusculo("Alana Silva Rocha"));
console.log(converterMinusculo("JULIA DE ARAÚJO MOURA"));
console.log(moeda(100.65));







