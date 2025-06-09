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

// export {converterMaiusculo, converterMinusculo, moeda};