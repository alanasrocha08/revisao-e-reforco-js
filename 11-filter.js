"use strict";

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplo.js";

/*filter (filtrar) 
Passa por elementos de uma array e executa uma função callback visando retornar valores de acorso com uma ou mais condições, gerando um novo array.*/

// Exemplo 1: filtrar vendas que tenham batido uma meta
const vendas = [1500, 3000, 500, 1000, 750, 5000, 100];
const META = 1000;

const vendasQueBateramMeta = vendas.filter((venda) => {
  return venda >= META;
});

console.log(vendasQueBateramMeta);

separador();

// Exemplo 2: Filtrar serviços pendentes
const servicos = [
  { codigo: 1, tipo: "Limpeza", status: "Concluído" },
  { codigo: 2, tipo: "Manutenção", status: "Pendente" },
  { codigo: 3, tipo: "Reparo", status: "Pendente" },
  { codigo: 4, tipo: "Consultoria", status: "Concluído" },
  { codigo: 5, tipo: "Instalação", status: "Concluído" },
];

const filtrarServicosPendentes = servicos.filter((servico) => {
  return servico.status === "Pendente";
});

console.log(filtrarServicosPendentes);
