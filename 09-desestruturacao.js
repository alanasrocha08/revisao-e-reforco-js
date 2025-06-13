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

separador();

/* Desestruturando objetos */
const musico = {
  nome: "David Gilmour",
  instrumento: "Guitarra",
  idade: 77,
  banda: "Pink Floyd",
};

//Acessando propriedade através do objeto (sem desestruturação)
//console.log(musico.nome);
//console.log(musico.idade);

// Com desestruturação
const { nome, instrumento, idade, banda } = musico;
console.log(nome);
console.log(instrumento);
console.log(idade);
console.log(banda);

separador();

const aluno = {
  nome: "Vitor",
  cidade: "São Paulo",
  estado: "SP",
};

//Desestruturação com o alias/apelido em propriedade
const { nome: nomeDoAluno, cidade, estado } = aluno;
console.log(nomeDoAluno); // acessando pelo apelido
console.log(cidade);
console.log(estado);

separador();

/* Mini-exercício */
const paciente = {
  nome: "Clara Ruiz",
  idade: 19,
  contato: ["clara@gmail.com", "11-98765-4321"],
  sintomas: "Sonolência permanente, coriza, tosse e bronquite",
  mensalidade: 568.74,
  endereco: {
    localidade: "Rua Francisco Coimbra",
    numero: "403",
    bairro: "Penha",
  },
  atendimento: () => (paciente.idade >= 60 ? "Preferencial" : "Clinico geral"),
};

// Dsestruture todos os elementos deste objeto paciente, tornando-os novas constante
const {
  nome: nomeDoPaciente,
  idade: idadeDoPaciente,
  contato: [email, telefone],
  sintomas,
  mensalidade,
  endereco: { localidade, numero: numeroEndereco, bairro },
  atendimento,
} = paciente;

// Use o cosole.log para o acesso a cada nova constante desestruturada
console.log(nomeDoPaciente);
console.log(idadeDoPaciente);
console.log(email);
console.log(telefone);
console.log(sintomas);
console.log(mensalidade);
console.log(localidade);
console.log(numeroEndereco);
console.log(bairro);
console.log(atendimento());

// Desestruturação de parâmetros de função
function processarPedido([produto, preco, marca = "não informado"]) {
  console.log("Produto: " + produto);
  console.log("Preço: " + preco);
  console.log("Marca: " + marca);
}

const pedidoA = ["TV", 1500, "Sony"];
processarPedido(pedidoA);

const pedidoB = ["Notebook", 2500];
processarPedido(pedidoB);

separador();

const exibirDados = ({ titulo, ano = "desconhecido" }) =>
  console.log(`Filme: ${titulo} - Ano: ${ano} \n`);

const filme1 = {
  titulo: "O Hobbit",
  ano: 2012,
};

const filme2 = {
  titulo: "O Senhor dos Anéis",
};

exibirDados(filme1);
exibirDados(filme2);
