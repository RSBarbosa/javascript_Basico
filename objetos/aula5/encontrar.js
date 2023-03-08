const clientes  = require("./clientes.json");

// Nome da funação(onde buscar, o que buscar, o que quero encontrar )
function encontrar(lista, chave, valor ){
return lista.find((item) => item[chave].includes(valor));
};

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar (clientes, "telefone", "53927428873");

console.log(encontrado);
console.log(encontrado2);