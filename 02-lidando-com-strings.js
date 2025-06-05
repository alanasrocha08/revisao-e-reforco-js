'use strict';

const nome = "Alana";
const sobrenome = "Silva";
let idade = 17;
let cidade = "São Paulo";
let estado = "SP"


/*  Meu nome é Alana Silva, tenho 17 anos e moro em São PAULO/SP */
// CONCATENAÇÃO tradicional usa o operador +
let mensagem1 = "Meu nome é " +nome +""+sobrenome +", tenho" +idade +"anos e moro em" +cidade+"/"+estado+"."; 
console.log(mensagem1);


// TEMPLATE STRING/LITERAL