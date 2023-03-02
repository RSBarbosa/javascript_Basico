// //  Um professor acidentalmente adicionou nomes repetidos na lista de chamada:

// Ana
// Clara
// Maria
// Maria
// João
// João
// João

// Remova os nomes repetidos, deixando apenas um de cada.

// Set é uma classe do javascript
// Os elementos de um Set não podem se repetir
// Set do inglês conjunto

const meuSet = new Set([1, 2, 4, 5, 5, 6, 8, 8, 8 ,9]);
console.log(meuSet)


const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João" ];

const usandoSet = new Set(nomes);
const nomesAtualizados = [...usandoSet];

// resumindo as duas linhas
// const nomesAtualizados = [... new Set(nomes)]

console.log(usandoSet)
console.log(nomesAtualizados)
