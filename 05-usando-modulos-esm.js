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

/*Exercícios 
1) Crie um arquivo chmado "funcoes.js" dentro da pasta "modulis-esm"
2) Dentro dele, programe 3 funções: 
    - Converter caracteres para MAIÚCULO
    - Converter caracteres para MINÚSCULO
    - Formatar valor em oeda brasileira (real) 
    
3) Exporte-as como módulos 
4) No arquivo 05, importe e utilize estas funções passando textor e valores para testes.*/




