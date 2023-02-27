// Faz um array de arrays
const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [numerosPares, numerosImpares];

console.log(numeros)

// ------
// Junta tudo num unico array


const numerosParess = [2, 4, 6]
const numerosImparess = [1, 3, 5]

const numeross = [...numerosParess, ...numerosImparess];

console.log(numeross)

// ---------------

const [par, impar] = [1, 2];
// const [par, impar] = [[ 2], [3, 5, 7]];
console.log(par, impar)

// --------- 
// Se vou usar apenas dos elementos do array, mas não quero perder os demais elementos

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6, 7,8];
console.log(num1, num2, outrosNumeros)


// Definir valor padrão

const [nome1 = "juliaa"] = [1];
console.log(nome1)

const [nomee1 = "juli"] = [];
console.log(nomee1)
