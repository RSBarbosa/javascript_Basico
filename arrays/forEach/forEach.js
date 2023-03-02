// Quando uma função é parametro de outra ela é chamada de função callback
// Significa chamar de volta
// dentro da function Pode usar dois parametros: valor do elemento e indice

const notas = [10, 6.5, 8, 7.5 ];

let somaDasNotas = 0;

notas.forEach(function (nota, indice){
  somaDasNotas += nota;
  console.log(`O elemento ${nota} tem o indice ${indice}`)
});

console.log(`A media geral é ${somaDasNotas/notas.length}`);