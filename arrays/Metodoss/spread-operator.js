//  Primeira versão => Crie um novo array com a nota 10 a mais, sem alterar o array original.
// Não funciona porque altera o array original

//  ... operador de espalhamento, igual a dar um control c e control v em notas, sem modificar o array original. faz a copia do array

const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notasoriginais são ${notas}`);

// ---------------------

//  ... operador de espalhamento  ou spread operator, igual a dar um control c e control v em notas, 
// sem modificar o array original.
//  faz a copia do array

const notass = [7, 7, 8, 9];

const novasNotass = [...notass];

novasNotass.push(10);

console.log(`As novas notas são ${novasNotass}`);
console.log(`As notas originais são ${notass}`);


