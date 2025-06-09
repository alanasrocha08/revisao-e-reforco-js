'use strict';

// Importação de recurso padrão (default)
import alunos from './modulos-esm/alunos.js';

//Importação de múltiplos recursos/módulos usando ESM
import { saudacao, clientes, separador } from './modulos-esm/exemplo.js';

saudacao("Nathalya Suguiura");
console.log(clientes);

separador();

