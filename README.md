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
