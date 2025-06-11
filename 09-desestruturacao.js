"use strict";
// 09-desestruturacao.js

import { separador } from "./modulos-esm/exemplo.js";

// Desestruturando arrays
const clientes = ["Jon Oliva", "Geddy Lee", "David Gilmour"];
const [cliente1, cliente2, cliente3] = clientes;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

separador();

const capitais = [
  "João Pessoa",
  "Manaus",
  "Curitiba",
  "Salvador",
  "Belo Horizonte",
];

// Desestruturando alguns valores (omitimod Curitiba e Belo Horizonte)
const [paraiba, amazonas, , bahia] = capitais;
console.log(paraiba);
console.log(amazonas);
console.log(bahia);

separador();

const linguagens = [
  ["HTML", "CSS", "JavaScript"],
  ["PHP", "Node.js", "SQL", "Python", "ASP.Net"],
];

//console.log(linguagens[0][2]); // JavaScript
//console.log(linguagens[1][3]); // Python

const [frontEnd, backEnd] = linguagens;
console.log(frontEnd[2]); // JavaScript
console.log(backEnd[3]); // Python

separador();

// Desestruturação aninhada
const [[html, css, js], [php, node, sql, python, asp]] = linguagens;
console.log(js); //js
console.log(python); // python

separador();

/*Mini-exercício */
const diversos = [
  "JavaScript - Reforço",
  ["Teclado", "Monitor", "Mouse"],
  2112,
  (texto) => texto.toUpperCase(),
];

// Faça a desestruturação dos elementos deste array
const [texto1, [teclado, monitor, mouse], numero, texto2] = diversos;

// Teste usando console.log() para exibir cada elemento extraído
console.log(texto1);
console.log(teclado);
console.log(numero);
console.log(texto2("Alana"));

separador();

const guloseimas = [
  "Brigadeiro",
  "Brownie",
  "Torta de limão",
  "Coxinha",
  "Pastel",
  "Pizza",
  "Esfiha",
];

// Desestruturação com operador rest
const [brigadeiro, brownie, tortaLimao, ...salgados] = guloseimas;
console.log(brigadeiro);
console.log(salgados); // virou um array
