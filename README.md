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