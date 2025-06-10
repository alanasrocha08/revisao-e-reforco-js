'use strict';

import { classificar } from './modulos-esm/funcoes.js';
import {separador} from './modulos-esm/exemplo.js';

/* Sobre o operador spread ...
Usamos o spread para espalhar dados de arrays e objetos, o que pode ser útil na chamada de funções e também na mesclagem desras estruturas. */

// Spread em arrays
let frutas = ["Maçã", "Banana", "Laranja"];
let maisFrutas = ["Goiaba", "Amora", "Pera", ...frutas ];

console.log(frutas);
console.log(maisFrutas);

separador();

//SpSpread para "espalhar" parâmetros para uma função
console.log( classificar(...maisFrutas)
);





