# Atividades de revisão e reforço JavaScript

## Sobre escopo de variáveis e constantes

- `var`: escopo GLOBAL
- `let`: escopo BLOCO, podendo ser GlOBAL dependendo de onde declarada.
- `const`: escopo BLOCO, poddendo ser GLOBAL dependendo de onde declarada. Obs: **obrigatório** inicializar com algum valor.

## Módulos no JavaScript

Existem duas formas de uso:

- Módulos CJS: mecanosmo mais antigo, usa `module.export` e `require` associado à uma constante.
- Módulos ESM: mecanismo artual, usa `export` e `import`.

**Obs.:** recomendável criar na raiz o `packege.json` contendo:

```json
{
  "type": "module"
}
```

---

## Sobre os operadores REST e SPEAD (...)

### REST:

- Junta vários valores em um array.
- Usado em funções para receber um número indefinido de argumentos. Assim, tudo que vier depois do primeiro parâmetro vai para o array outros

### SPREAD:

- Espalha os valores de um array (ou objeto) em elementos individuais.
- Usado para passar os itens de um array como argumentos de uma função, copiar ou juntar arrays e objetos.
  Também funciona para objetos.
- Ele "espalha" os itens onde você precisa deles

#### Breve resumo

REST agrupa valores em um array (receber vários argumentos).
SPREAD espalha os valores de um array ou objeto (passar vários valores de uma vez).
More actions

---

## Sobre desestruturação

A **desestruturação** em JavaScript é uma forma prática de **extrair valores de arrays ou propriedades de objetos** e atribuí-los diretamente a variáveis.

### Para que serve?

Ela **simplifica o código**, evitando a repetição e deixando a leitura mais clara.

### Exemplos:

#### 1. Desestruturação de array:

```js
const numeros = [10, 20, 30];
const [a, b] = numeros;
console.log(a); // 10
console.log(b); // 20
```

#### 2. Desestruturação de objeto:

```js
const pessoa = { nome: "Ana", idade: 25 };
const { nome, idade } = pessoa;
console.log(nome); // Ana
console.log(idade); // 25
```

### Resumo:

A desestruturação serve para **pegar partes de um array ou objeto** e **armazenar em variáveis com menos código**. É muito útil com funções, parâmetros, APIs e estados em React.
