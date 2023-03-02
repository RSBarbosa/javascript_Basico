// Os dois parametros do reduce são obrigatório, no caso valor acumulado(acc) e valor atual

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170

// Outra versão

const somaa = numeros.reduce(function (acc, atual) {
  return atual + acc
 }, 0)

//  Com função callback fora do reduce

function operacaoNumerica(acc, atual) {
  return atual + acc
 }
 
 const somaaa = numeros.reduce(operacaoNumerica, 0)