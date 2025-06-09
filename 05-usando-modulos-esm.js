'use strict';

// Importação de recurso padrão (default)
import alunos from './modulos-esm/alunos.js';

//Importação de múltiplos recursos/módulos usando ESM
import { saudacao, clientes, separador } from './modulos-esm/exemplo.js';

saudacao("Nathalya Suguiura");
console.log(clientes);

separador();

//Acessando o recurso do import de alunos
console.log(alunos[1]);
console.log(alunos);

for(const aluno of alunos){
    console.log(aluno);
}
