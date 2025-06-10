'use strict';

export const converterMaiusculo = (texto) => {
    return texto.toUpperCase();
};

export const converterMinusculo = (texto) => {
    return texto.toLowerCase();
};

export const moeda  = (valor) => {
     return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
};

/* Usamos o rest operador para obter uma lista de parâmetros, não importando a quantidade.*/

export function classificar (...texto){
    return texto.sort(item)
}